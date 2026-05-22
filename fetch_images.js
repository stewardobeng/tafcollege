const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const rootDir = __dirname;
const imgDir = path.join(rootDir, 'img');
const extensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];

// Ensure img directory exists
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

// Helper to download file
function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const client = url.startsWith('https') ? https : http;
        
        const request = client.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close(() => resolve(true));
                });
            } else if (response.statusCode === 301 || response.statusCode === 302) {
                // Handle redirect
                if (response.headers.location) {
                    downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                } else {
                    reject(`Redirect with no location: ${url}`);
                }
            } else {
                fs.unlink(dest, () => {});
                reject(`Server responded with ${response.statusCode}: ${url}`);
            }
        });

        request.on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err.message);
        });
    });
}

// Helper to get relative path
function getRelativePath(fromFile, toFile) {
    let rel = path.relative(path.dirname(fromFile), toFile);
    return rel.split(path.sep).join('/');
}

// Recursive scan
function scanDir(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'img') { // Skip common ignored dirs and img dir itself
                scanDir(filePath, fileList);
            }
        } else {
            if (['.html', '.css', '.js'].includes(path.extname(file))) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

async function main() {
    const files = scanDir(rootDir);
    const urlMap = new Map(); // url -> localFilename

    // 1. Scan files for URLs
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        // Regex to find http(s) URLs ending with image extensions
        // This is a heuristic. It might catch false positives or miss complex cases.
        // It looks for http://... .jpg (plus query params optionally, but let's stick to simple first)
        // We look for quotes around it to be safer, or url(...)
        const regex = /((?:https?:)?\/\/[^"'()>\s]+\.(?:png|jpg|jpeg|gif|svg|webp))/gi;
        
        let match;
        while ((match = regex.exec(content)) !== null) {
            const url = match[1];
            if (!urlMap.has(url)) {
                const filename = path.basename(url);
                // Handle duplicate filenames from different URLs?
                // For now, assume unique or overwrite.
                urlMap.set(url, filename);
            }
        }
    }

    console.log(`Found ${urlMap.size} unique image URLs.`);

    // 2. Download images
    for (const [url, filename] of urlMap) {
        const dest = path.join(imgDir, filename);
        // Normalize URL (add protocol if missing)
        let downloadUrl = url;
        if (url.startsWith('//')) {
            downloadUrl = 'https:' + url;
        }

        console.log(`Downloading ${downloadUrl} to ${dest}...`);
        try {
            await downloadFile(downloadUrl, dest);
            console.log('Success.');
        } catch (err) {
            console.error(`Failed to download ${downloadUrl}: ${err}`);
            // If download fails, we might not want to replace the URL in the file?
            // Or maybe we do, assuming we'll fix it later.
            // For this task, if download fails, we strictly shouldn't break the live link? 
            // But the user said "store them locally".
            // Let's assume successful download is required for replacement.
            urlMap.delete(url); 
        }
    }

    // 3. Replace in files
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;

        // specific replacement to avoid replacing partial strings incorrectly
        // We iterate over our known valid URLs
        for (const [url, filename] of urlMap) {
            if (content.includes(url)) {
                const localPath = path.join(imgDir, filename);
                const relativePath = getRelativePath(file, localPath);
                // Replace all occurrences
                // Escape regex special chars in url
                const escapedUrl = url.replace(/[.*+?^${}()|[\\]/g, '\\$&');
                const replaceRegex = new RegExp(escapedUrl, 'g');
                content = content.replace(replaceRegex, relativePath);
                changed = true;
            }
        }

        if (changed) {
            console.log(`Updating references in ${file}...`);
            fs.writeFileSync(file, content, 'utf8');
        }
    }
    
    console.log('Done.');
}

main();

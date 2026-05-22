$dest = "C:\xampp\htdocs\tafcollege\img"
$headers = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }

$images = @(
    @{ file = "hero-campus.jpg";          url = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&q=85" },
    @{ file = "about-students.jpg";       url = "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=85" },
    @{ file = "program-fashion.jpg";      url = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85" },
    @{ file = "program-music.jpg";        url = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=85" },
    @{ file = "program-content.jpg";      url = "https://images.unsplash.com/photo-1616096142563-ce1506d5619a?w=1200&q=85" },
    @{ file = "program-cosmetology.jpg";  url = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=85" },
    @{ file = "program-design-build.jpg"; url = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85" },
    @{ file = "vision-card.jpg";          url = "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=85" },
    @{ file = "mission-card.jpg";         url = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85" },
    @{ file = "values-card.jpg";          url = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=85" },
    @{ file = "testimonial-student-1.jpg"; url = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=85" },
    @{ file = "testimonial-student-2.jpg"; url = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=85" },
    @{ file = "testimonial-student-3.jpg"; url = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=85" },
    @{ file = "page-header-bg.jpg";       url = "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=85" },
    @{ file = "banner-bg.jpg";            url = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85" },
    @{ file = "student-life-1.jpg";       url = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=85" },
    @{ file = "student-life-2.jpg";       url = "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=85" },
    @{ file = "campus-life.jpg";          url = "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&q=85" },
    @{ file = "staff-academic-director.jpg"; url = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=85" },
    @{ file = "staff-partnerships.jpg";   url = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85" },
    @{ file = "staff-fashion.jpg";        url = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=85" },
    @{ file = "staff-music.jpg";          url = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85" },
    @{ file = "staff-content.jpg";        url = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=600&q=85" },
    @{ file = "staff-cosmetology.jpg";    url = "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=600&q=85" },
    @{ file = "staff-enterprise.jpg";     url = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=85" },
    @{ file = "staff-support.jpg";        url = "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85" }
)

Write-Host "Starting image downloads to: $dest"
Write-Host "=" * 50

foreach ($img in $images) {
    $outPath = Join-Path $dest $img.file
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $outPath -Headers $headers -TimeoutSec 30
        $size = [math]::Round((Get-Item $outPath).Length / 1KB, 1)
        Write-Host "OK  [$size KB]  $($img.file)"
    } catch {
        Write-Host "FAIL: $($img.file) - $($_.Exception.Message)"
    }
}

Write-Host "=" * 50
Write-Host "Download complete. Files saved to: $dest"

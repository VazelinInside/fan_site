document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-bg-video');
    video.addEventListener('error', function() {
        video.innerHTML = '<source src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/dark_willow.mp4"';
        video.load();
    });
});
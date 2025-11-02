document.addEventListener('DOMContentLoaded', () => {
    const backgroundVideo = document.querySelector('.video-background');
    const backgroundVideoElement = document.getElementById('background-video');

    // Fade in background video and music
    backgroundVideo.style.opacity = 1;
    
    // Unmute and play background video and music
    backgroundVideoElement.muted = true;
    backgroundVideoElement.volume = 0;
    backgroundVideoElement.play();
    backgroundVideoElement.volume = 1;
    backgroundVideoElement.muted = false;
});

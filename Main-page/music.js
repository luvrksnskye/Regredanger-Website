//Don't change anything here unless you know what you're doing. Only change it if you want to remove or add songs!
class MusicPlayer {
    constructor(tracks) {
        console.log(`Initializing music player`);
        this.tracks = tracks;
        this.audioPlayer = new Audio();
        this.audioPlayer.loop = false; // Disable single track loop
        this.audioPlayer.autoplay = true;
        this.audioPlayer.volume = 0.4;

        // Get all necessary DOM elements
        this.trackNameDisplay = document.getElementById('trackName');
        this.musicPlayerContainer = document.querySelector('.music-player');
        this.playPauseButton = document.getElementById('playPauseButton');
        this.nextTrackButton = document.getElementById('nextTrackButton');
        this.prevTrackButton = document.getElementById('prevTrackButton');
        this.volumeSlider = document.getElementById('volumeSlider');

        // Initialize from localStorage or set defaults
        this.currentTrackIndex = parseInt(localStorage.getItem('currentTrackIndex')) || 0;
        this.currentTime = parseFloat(localStorage.getItem('currentTime')) || 0;
        this.isPlaying = localStorage.getItem('isPlaying') === 'true';

        // Check if the currentTrackIndex is within range
        if (this.currentTrackIndex >= this.tracks.length) {
            this.currentTrackIndex = 0;
        }

        // Setup event listeners
        this.audioPlayer.addEventListener('ended', () => this.nextTrack());
        this.audioPlayer.addEventListener('timeupdate', () => this.updateTimeInStorage());
        
        // Load the current track
        this.loadTrack(this.tracks[this.currentTrackIndex]);
        this.audioPlayer.currentTime = this.currentTime;

        // Add event listeners to buttons
        if (this.playPauseButton) {
            this.playPauseButton.addEventListener('click', () => this.playPauseTrack());
        }
        if (this.nextTrackButton) {
            this.nextTrackButton.addEventListener('click', () => this.nextTrack());
        }
        if (this.prevTrackButton) {
            this.prevTrackButton.addEventListener('click', () => this.prevTrack());
        }
        if (this.volumeSlider) {
            this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        }

        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => this.handleVisibilityChange());

        // Add hover sound effect
        if (this.musicPlayerContainer) {
            this.setupHoverEffect();
        }
    }

    updateTimeInStorage() {
        localStorage.setItem('currentTime', this.audioPlayer.currentTime);
        localStorage.setItem('isPlaying', !this.audioPlayer.paused);
    }

    loadTrack(track) {
        if (track) {
            console.log(`Loading track: ${track.name} (${track.src})`);
            this.audioPlayer.src = track.src;
            if (this.trackNameDisplay) {
                this.trackNameDisplay.textContent = track.name;
            }
            localStorage.setItem('currentTrackIndex', this.currentTrackIndex);
        } else {
            console.error('Error loading track: track is undefined');
        }
    }

    nextTrack() {
        console.log(`Playing next track`);
        // Update track index, loop back to 0 if at the end
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        this.loadTrack(this.tracks[this.currentTrackIndex]);
        this.audioPlayer.play().catch((error) => {
            console.log(`Error playing track: ${error}`);
        });
    }

    prevTrack() {
        console.log(`Playing previous track`);
        // Update track index, loop back to the end if at the start
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
        this.loadTrack(this.tracks[this.currentTrackIndex]);
        this.audioPlayer.play().catch((error) => {
            console.log(`Error playing track: ${error}`);
        });
    }

    playPauseTrack() {
        console.log(`Playing/pausing track`);
        if (this.audioPlayer.paused) {
            this.audioPlayer.play().catch((error) => {
                console.log(`Error playing track: ${error}`);
            });
        } else {
            this.audioPlayer.pause();
        }
    }

    setVolume(volume) {
        console.log(`Setting volume to ${volume}`);
        this.audioPlayer.volume = volume / 100;
    }

    handleVisibilityChange() {
        console.log(`Handling visibility change`);
        if (document.hidden) {
            // Save state when page is hidden
            this.updateTimeInStorage();
        } else {
            // Restore state when page is visible again
            const savedTime = parseFloat(localStorage.getItem('currentTime'));
            const wasPlaying = localStorage.getItem('isPlaying') === 'true';
            const savedTrackIndex = parseInt(localStorage.getItem('currentTrackIndex'));
            
            // If the track index changed, load the new track
            if (savedTrackIndex !== this.currentTrackIndex) {
                this.currentTrackIndex = savedTrackIndex;
                this.loadTrack(this.tracks[this.currentTrackIndex]);
            }
            
            if (savedTime) {
                this.audioPlayer.currentTime = savedTime;
            }
            
            if (wasPlaying) {
                this.audioPlayer.play().catch((error) => {
                    console.log(`Error playing track: ${error}`);
                });
            }
        }
    }

    setupHoverEffect() {
        console.log(`Setting up hover effect`);
        const hoverSound = new Audio('https://dl.dropbox.com/scl/fi/whwndenvcuufidm233f7z/hover.wav?rlkey=7yohzu5c9i2uj07r8l4kn377c&st=ura21rrp&dl=0');
        
        this.musicPlayerContainer.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch((error) => {
                console.log(`Error playing hover sound: ${error}`);
            });
        });
    }
}

// Cyberpunk Tracks, you can add more here :3
const tracks = [
    {
        name: 'Phantom Genesis',
        artist: 'CYBERPRIEST',
        src: 'https://dl.dropbox.com/scl/fi/4f2toq076w0c42pjmwdn3/CYBERPRIEST-Phantom-Genesis.mp3?rlkey=xn3r8pkytj3tl93gwllsnool6&st=ql6kux7e&dl=0'
    },
    {
        name: 'Breach Protocol',
        artist: 'CYBERPRIEST',
        src: 'https://dl.dropbox.com/scl/fi/9uffey91ybvc6ukrzynsb/CYBERPRIEST-Breach-Protocol.mp3?rlkey=ajcrdjr0i9libb7qa8xbkbkwh&st=icgiada4&dl=0'
    },
    {
        name: 'Trauma Team',
        artist: 'Vector Seven',
        src: 'https://dl.dropbox.com/scl/fi/6z8yqefq22uk35iuduwqc/Vector-Seven-Trauma-Team.mp3?rlkey=6uro5ztg3bz4ttweabcxmttvb&st=ozfr6wlc&dl=0'
    },
    {
        name: 'CYBERPSYCHO',
        artist: 'skxdie',
        src: 'https://dl.dropbox.com/scl/fi/i1kszpqfb3l0bw94idjh8/CYBERPSYCHO.mp3?rlkey=b37u5kegvd1tcukvv9kbwrd9u&st=s5hb8mww&dl=0'
    },
    {
        name: 'Ghost Machine',
        artist: 'CYBERPRIEST',
        src: 'https://dl.dropbox.com/scl/fi/nyq5uxd6v80nphixzrr8e/Ghost-In-The-Machine.mp3?rlkey=x2bhut16wl8bksg0xv2iwjnic&st=17d2307x&dl=0'
    },
    {
        name: 'Synthetic',
        artist: 'CYBERPRIEST',
        src: 'https://dl.dropbox.com/scl/fi/ph3lr8rguy49zxbqxffjh/CYBERPRIEST-Synthetic-Black-Suit.mp3?rlkey=qfd70aswvyac34b7qf0iazkxn&st=fcuned75&dl=0'
    },
    {
        name: 'Shadow Tower',
        artist: 'CYBERPRIEST',
        src: 'https://dl.dropbox.com/scl/fi/cg8ro6h3g9j1pv59bc0ls/CYBERPRIEST-Shadow-Tower-Villenoire-extension.mp3?rlkey=t527ypfhuha1wvldwr4s4q3bv&st=94bclx17&dl=0'
    }
];

// Initialize the music player
document.addEventListener('DOMContentLoaded', () => {
    const musicPlayer = new MusicPlayer(tracks);
});


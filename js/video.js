window.addEventListener("load", function() {
    console.log("Good job opening the window");
});


const video = document.getElementById('player1');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const slowerButton = document.getElementById('slower');
const fasterButton = document.getElementById('faster');
const skipButton = document.getElementById('skip');
const muteButton = document.getElementById('mute');
const volSlider = document.getElementById('slider');
const volumeDisplay = document.getElementById('volume');


playButton.addEventListener('click', function() {
    video.play();
    console.log("Play Video");
});

pauseButton.addEventListener('click', function() {
    video.pause();
    console.log("Pause Video");
});


slowerButton.addEventListener('click', function() {
    video.playbackRate = Math.max(0.1, video.playbackRate - 0.1);
    console.log("Slow Video");
});


fasterButton.addEventListener('click', function() {
    video.playbackRate += 0.1; 
    console.log("Speed Video");
});


skipButton.addEventListener('click', function() {
    video.currentTime += 10; 
    console.log("Skip Video");
});

muteButton.addEventListener('click', function () { 
    // video.muted = true;
    console.log("unMute Video");
    if (video.muted == true) {
        console.log("video unmuted");    
        video.muted = false;
    }
    else {
        video.muted = true;
        console.log("video muted");    
    }
});


volSlider.addEventListener('input', function () {
    let volumeValue = volSlider.value;
    video.volume = volumeValue / 100;
    volumeDisplay.textContent = volumeValue + "%";
    console.log('Volume set to', volumeValue + "%");
});

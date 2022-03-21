var video = document.getElementById("myVideo");
var playButton = document.getElementById("play");
var muteButton = document.getElementById("mute");

video.addEventListener("pause", pauseHandler);
video.addEventListener("playing", playingHandler);
video.addEventListener("volumechange", volumechangeHandler);

playButton.addEventListener("click", playClick);
muteButton.addEventListener("click", muteClick);

function pauseHandler(e) {
    playButton.innerHTML = "Resume";
}

function playingHandler(e) {
    playButton.innerHTML = "Pause";
}

function volumechangeHandler(e) {
    muteButton.innerHTML = video.muted ? "Unmute" : "Mute";
}

function playClick(e) {
    video.paused ? video.play() : video.pause();
}

function muteClick(e) {
    video.muted = !video.muted;
}


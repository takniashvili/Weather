var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 1; // Start with count = 1 to indicate "Pause" initially

// Function to play or pause the audio
function playPause() {
  if (count === 1) {
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = "Play &#9658;";
  } else {
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = "Stop | |";
  }
}

// Function to restart the audio when it ends
function restartAudio() {
  audio.currentTime = 0; // Set the audio's current time back to the beginning
  audio.play();
}

// Initialize the button text based on autoplay
if (audio.autoplay) {
  playPauseBTN.innerHTML = "Stop | |";
} else {
  playPauseBTN.innerHTML = "Play &#9658;";
}

// Add an event listener to restart the audio when it ends
audio.addEventListener('ended', function () {
  restartAudio();
});

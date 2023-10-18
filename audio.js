
var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause () {
  if(count == 0) {
    count = 1;
    audio.play();
    playPauseBTN.innerHTML = "Stop | |";
  } else {
    count = 0;
    audio.pause();
    playPauseBTN.innerHTML = "Play &#9655;";
  }
}

// Function to restart the audio when it ends
function restartAudio() {
  audio.currentTime = 0; // Set the audio's current time back to the beginning
  audio.play();
}

// Add an event listener to restart the audio when it ends
audio.addEventListener('ended', function () {
  restartAudio();
});

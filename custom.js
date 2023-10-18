// IF SONG IS NOT AUTOPLAY THIS VERSION BEETTER

// var audio = document.getElementById('audio');
// var playPauseBTN = document.getElementById('playPauseBTN');
// var count = 0;

// function playPause () {
//   if(count == 0) {
//     count = 1;
//     audio.play();
//     playPauseBTN.innerHTML = "Stop | |";
//   } else {
//     count = 0;
//     audio.pause();
//     playPauseBTN.innerHTML = "Play &#9655;";
//   }
// }

var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 1; // Start with count = 1 to indicate "Pause" initially

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

// Initialize the button text based on autoplay
if (audio.autoplay) {
  playPauseBTN.innerHTML = "Stop | |";
} else {
  playPauseBTN.innerHTML = "Play &#9658;";
}
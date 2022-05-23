// detecting onclick press
const keys = document.querySelectorAll('.letter');

function playSound(key) {
  switch (key) {
    case 'a':
      const audio1 = new Audio('/sounds/crash.mp3');
      audio1.play();

      break;
    case 's':
      const audio2 = new Audio('/sounds/kick-bass.mp3');
      audio2.play();
      break;
    case 'd':
      const audio3 = new Audio('/sounds/snare.mp3');
      audio3.play();
      break;
    case 'f':
      const audio4 = new Audio('/sounds/tom-1.mp3');
      audio4.play();
      break;
    case 'j':
      const audio5 = new Audio('/sounds/tom-2.mp3');
      audio5.play();
      break;
    case 'k':
      const audio6 = new Audio('/sounds/tom-3.mp3');
      audio6.play();
      break;
    case 'l':
      const audio7 = new Audio('/sounds/tom-4.mp3');
      audio7.play();
      break;

    default:
      console.log(key);
  }
}

function soundAnimation(currentKey) {
  let activeSounds = document.querySelector('.' + currentKey);
  activeSounds.classList.add('sound');

  setTimeout(function () {
    activeSounds.classList.remove('sound');
  }, 100);
}

for (let i = 0; i < keys.length; i++) {
  document
    .querySelectorAll('.letter')
    [i].addEventListener('click', function () {
      let letters = this.innerHTML;
      playSound(letters);
      soundAnimation(letters);
    });
}
// detecting keyboard press

document.addEventListener('keydown', function (event) {
  playSound(event.key);
  soundAnimation(event.key);
});

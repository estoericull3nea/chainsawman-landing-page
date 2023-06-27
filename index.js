const vol = document.querySelector('.fa-volume-xmark')
const myAudio = document.querySelector('.myAudio')

if (vol) {
  vol.addEventListener('click', () => {
    if (myAudio.paused) {
      myAudio.play()
      vol.classList.remove('fa-volume-xmark')
      vol.classList.add('fa-volume-high')
    } else {
      myAudio.pause()
      vol.classList.add('fa-volume-xmark')
      vol.classList.remove('fa-volume-high')
    }
  })
}

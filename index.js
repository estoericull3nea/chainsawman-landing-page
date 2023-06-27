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

const faBars = document.querySelector('.fa-bars')
const nav = document.querySelector('nav')

if (faBars) {
  faBars.addEventListener('click', () => {
    nav.classList.toggle('open')
    faBars.classList.toggle('fa-xmark')
  })
}

const vol = document.querySelector('.fa-volume-xmark')
const myAudio = document.querySelector('.myAudio')
const myVideo = document.querySelector('.myVideo')

if (vol) {
  vol.addEventListener('click', () => {
    if (myAudio.paused) {
      myAudio.play()
      vol.classList.remove('fa-volume-xmark')
      vol.classList.add('fa-volume-high')
      myVideo.play()
    } else {
      myAudio.pause()
      vol.classList.add('fa-volume-xmark')
      vol.classList.remove('fa-volume-high')
      myVideo.pause()
    }
  })
}

const faBars = document.querySelector('.fa-bars')
const nav = document.querySelector('nav')
const header = document.querySelector('header')

if (faBars) {
  faBars.addEventListener('click', () => {
    nav.classList.toggle('open')
    faBars.classList.toggle('fa-xmark')
  })
}

window.addEventListener('scroll', () => {
  nav.classList.remove('open')
  faBars.classList.remove('fa-xmark')
  header.classList.toggle('sticky', window.scrollY > 0)
})

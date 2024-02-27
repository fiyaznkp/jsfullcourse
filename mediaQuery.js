// here we are doing mediaquery using js

const header = document.querySelector('.show')

const deviceWidth = window.matchMedia(('max-width:500px'))

if(deviceWidth.matches){
    header.classList.add('hide')
}
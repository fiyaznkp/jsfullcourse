// here we are doing mediaquery using js

const header = document.querySelector('.show')
const main = document.querySelector('.main')

main.addEventListener('click',()=>{
    header.classList.toggle('hide')
})

// const deviceWidth = window.matchMedia('(max-width:500px)')


// window.addEventListener('resize',resize)

// function resize(){
   
//     if(deviceWidth.matches){
//         header.classList.add('hide')
//     }else{
//         header.classList.remove('hide')
//     }
// }

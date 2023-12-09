const pic=document.querySelector('.bg')
const num=document.querySelector('.number')
let opac=0;
let blu=100
const a=[1.0,0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1]
const timer=()=>{
    if(opac<=100){
        num.innerText=opac+ "%"
        let p=opac/10
        num.style.opacity=a[p]
        pic.style.filter=`blur(${blu+"px"})`
        opac++
        blu--
    }else{
        num.style.opacity=0
        clearInterval()
    }
}
window.addEventListener('load',()=>{
    setInterval(timer,50)
})
const slider = document.querySelector('.slider')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let length = slider.children.length;
let val = 0;
prev.addEventListener('click', () => {
    changeSlide(-1);

})
next.addEventListener('click', () => {
    changeSlide(1);
})

function changeSlide(direction) {
    val = (val + direction + length) % length
    slider.style.transform = `translateX(${-val * 100}%)`
}
setInterval(()=>{
document.getElementById('box').style. transform= `translateY(${0}%)`

},2000)

// setInterval(() => {
//     changeSlide(1)
//     document.getElementById('box').style. transform= `translateY(${120}%)`
//     }, 10000)
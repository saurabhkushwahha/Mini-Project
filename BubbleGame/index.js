let cluster = " ";
let time = 60;
let scoreval = -10;
let hitval;
const contBottom = document.querySelector('.cont-bottom');
const bubble = document.getElementById('bubble')
const timer = document.getElementById('timer')
const hit = document.getElementById('hit')
const score = document.getElementById('score')
const play=document.getElementById('play')

contBottom.addEventListener("click",(e)=>{
        if( Number(e.target.textContent)=== hitval){
            increaseScore()
        }
        changeHit()
        changebubble()
    })
   function changebubble(){
    for(let i=1; i<=72; i++){
        contBottom.children[i].textContent=String(Math.floor(Math.random() * 10));
    }
   }
    function increaseScore(){
        scoreval+=10;
        score.textContent=`${scoreval}`
    }
    
function changeHit(){
    hitval= Math.floor(Math.random()*10);
    hit.textContent=`${hitval}`
}
function makebubble() {
    for (let i = 1; i <=72; i++) {
        cluster += `<div id="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    contBottom.innerHTML = cluster
}

function setTime() {
    const timeInt = setInterval(() => {
        if (time > 0) {
            time--;
            timer.innerHTML = time;
        } else {
            clearInterval(timeInt);
            contBottom.innerHTML = '<h1>Game over</h1> ';
            hit.innerHTML =" "
        }
        
    }, 1000)
}
    play.addEventListener("click",()=>{
        setTime()
         makebubble()
         changeHit()
         increaseScore()
    })

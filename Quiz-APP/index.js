const container=document.getElementById('cont')
const QABox=document.getElementById('QA-box')
const boxBtn=document.querySelector('.box-btn')
const start=document.getElementById('start')

const QuestionArr = [
    {
        Question: "Q. What is the smallest unit of data in a computer ?",
        Ans1: "Gigabyte",
        Ans2: "Bit",
        Ans3: "Byte",
        Ans4: "Terabyte"
    },
    {
        Question: "Q. Which of the following is NOT an anti-virus software ?",
        Ans1: "Avast",
        Ans2: "Linux",
        Ans3: "Norton",
        Ans4: "Kaspersky"
    },
    {
        Question: "Q. What is full form of PROM ?",
        Ans1: "Program read-only memory",
        Ans2: "Primary read-only memory",
        Ans3: "Programmable read-only memory",
        Ans4: "Program read-output memory"
    },
    {
        Question: "Q.Which unit of the computer is considerd as the brain of the computer ?",
        Ans1: "Memory Unit",
        Ans2: "Input Unit",
        Ans3: "CPU",
        Ans4: "Output Unit"
    },
    {
        Question: "Q.In the context of computing, what is the full form of URL ?",
        Ans1: "Undistributed Resource Locator",
        Ans2: "Unified Resource Locator",
        Ans3: "Uniform Resource Locator",
        Ans4: "Uniform Region Locator"
    }
    
]
let correctAnsArr = ["ans2", "ans2", "ans3", "ans3", "ans3"]
start.addEventListener('click',()=>{
    i=0;
    setQuestion(i)
})
const submit=document.getElementById('submit')


let i;
let question;
let ansBox;    
let score=0;


function setQuestion(i){

     if(i==correctAnsArr.length){
          showPoint()
     }

    // Question-box
    question=document.createElement('h3')
    question.setAttribute('id','Question-box')
    QABox.appendChild(question)
    question.innerHTML=QuestionArr[i].Question
    
    // Answer-box
      ansBox=document.createElement("div")
    ansBox.setAttribute('class',"Answer-box")
    QABox.appendChild(ansBox)
    // Button create 
    const btn1=document.createElement("button")
    btn1.setAttribute("class","ans")
    btn1.setAttribute("id","ans1")
   ansBox.appendChild(btn1)
    btn1.innerHTML=QuestionArr[i].Ans1;

    const btn2=document.createElement("button")
    btn2.setAttribute("class","ans")
    btn2.setAttribute("id","ans2")
   ansBox.appendChild(btn2)
    btn2.innerHTML=QuestionArr[i].Ans2;
    const btn3=document.createElement("button")
    btn3.setAttribute("class","ans")
    btn3.setAttribute("id","ans3")
   ansBox.appendChild(btn3)
    btn3.innerHTML=QuestionArr[i].Ans3;

    const btn4=document.createElement("button")
    btn4.setAttribute("class","ans")
    btn4.setAttribute("id","ans4")
   ansBox.appendChild(btn4)
    btn4.innerHTML=QuestionArr[i].Ans4;
    
    
    
//checking the answer
ansBox.addEventListener('click', (e) => {
    e.stopPropagation() // here it's not working    
    if (correctAnsArr[i] == e.target.id && e.target.tagName == "BUTTON") {
         score++
        e.target.style.backgroundColor = "green"
     }
     else if (e.target.tagName == "DIV") {
         e.target.style.backgroundColor = "black"
     }
     else {
         document.getElementById(`${correctAnsArr[i]}`).style.backgroundColor = 'rgba(50, 205, 50, 0.856)'
         e.target.style.backgroundColor = 'red'
     }
    })    
    
}
    
submit.addEventListener('click', ()=>{   
   question.remove()
     ansBox.remove()
     i++;
    setQuestion(i);

})

function showPoint(){
     QABox.remove()
     boxBtn.remove()
    const point=document.createElement('h2')
    point.setAttribute('id','point')
    container.appendChild(point) 
    point.innerHTML=`Your score is ${score} out of 5.`   

}
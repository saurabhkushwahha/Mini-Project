const inputBox=document.getElementById('input');
const  btn=document.getElementById('input-btn');
const list=document.querySelector("ul")

btn.addEventListener('click',function(){
    if(inputBox.value  ===""){
        alert("Enter task");
    }else{
        addTask(inputBox.value)
    }
    inputBox.value= "";
})

function addTask(task){
     const li= document.createElement('li')
      li.appendChild(document.createTextNode(`${task}`))
      list.appendChild(li)
      const span=document.createElement("span")
      span.innerHTML=`<img src="./del.png" >`
      li.appendChild(span)
}


list.addEventListener('click',(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle('checked')
    }
   else if(e.target.tagName==='IMG'){
      e.target.parentElement.parentElement.remove()
   }
    
})

















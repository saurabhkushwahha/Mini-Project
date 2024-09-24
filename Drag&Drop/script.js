const elements=document.querySelectorAll('li');
const right=document.getElementById('right')
const left=document.getElementById('left')
elements.forEach(ele =>{
     ele.addEventListener('dragstart',function (e){
         let selected=e.target
           right.addEventListener('dragover',(e)=>{
              e.preventDefault();
           })
           right.addEventListener('drop',(e)=>{
                right.appendChild(selected)
                selected=null;
           })
           left.addEventListener('dragover',(e)=>{
              e.preventDefault();
           })
           left.addEventListener('drop',(e)=>{
                left.appendChild(selected)
                selected=null;
           })
     })
})
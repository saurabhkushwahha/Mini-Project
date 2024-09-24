const input=document.getElementById("display")
let string="";
const buttons=document.querySelectorAll('button');
let buttonArr=Array.from(buttons)
buttonArr.forEach((btn)=>{
     btn.addEventListener('click',(b)=>{
           if(b.target.innerHTML=='='){
              if(string.includes("x")){
                string=string.replaceAll("x","*")
              }
              string = eval(string);
              input.value=string;
        }else if(b.target.innerHTML=='C'){
             string="";
             input.value=string;
        }
        else if(b.target.innerHTML=='Del'){
             string=string.substring(0,string.length-1);
             input.value=string;
        }
           string += b.target.value;
           input.value=string;
         })
})

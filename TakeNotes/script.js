const color=document.querySelector('input')
const createBtn=document.getElementById('createbtn')
const list=document.querySelector('.list')
createBtn.addEventListener('click',()=>{
    let newNote= document.createElement('div')
    newNote.classList.add('notes')
    newNote.innerHTML=`<span id="close" class='close'>&times</span>
    <div>
    <textarea placeholder="Write Content...." rows="10" cols="30"></textarea>
    </div>`

    list.appendChild(newNote)
    newNote.style.borderTopColor=color.value;

})

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('close')){
         e.target.parentNode.remove()
    }
})

// check it out

let cursor ={
     x: null,
     y: null
}

let note={
    dom: null,
    x: null,
    y:null
}

document.addEventListener('mousedown',(e)=>{
     if(e.target.classList.contains('notes')){
        cursor={
              x : e.clientX,
              y : e.clientY
        }
        note={
            dom: e.target,
            x : e.target.getBoundingClientRect().left,
             y: e.target.getBoundingClientRect().top
        }
     }
})

document.addEventListener('mousemove',(e)=>{
    if(note.dom==null) return;
     let currentCursor={
         x:e.clientX,
         y:e.clientY
     }
     let distance={
         x: currentCursor.x-cursor.x,
         y: currentCursor.y-cursor.y
     }
     note.dom.style.left=(note.x+distance.x)+'px';
     note.dom.style.top=(note.y+distance.y)+'px';
     note.dom.style.cursor='grab';
})


document.addEventListener('mouseup',()=>{
     if(note.dom==null)return;
      note.dom.style.cursor='auto';
      note.dom=null;
})





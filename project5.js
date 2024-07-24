const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

const saveNotes = ()=>{
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
     const data = [];
     notes.forEach((note) => {
        data.push(note.value)
     });
    //  console.log(data);
    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
    
}

addBtn.addEventListener("click",function(){
    addNote()
})

const addNote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
        <div class="tool">
            <i class="trash fa-solid fa-trash"></i>
            <i class="save fa-regular fa-save"></i>
        </div>
        <textarea>${text}</textarea>
       `; 
        note.querySelector(".trash").addEventListener(
        "click",function(){
            note.remove();
            saveNotes();
        }
       )
       note.querySelector(".save").addEventListener(
        "click",function(){
            saveNotes();
        }
       )
       note.querySelector("textarea").addEventListener("focusout",function(){
        saveNotes();
       });
       main.appendChild(note);
       saveNotes();
}

(
    function(){
     const lsNotes = JSON.parse(localStorage.getItem("notes"));
     // console.log(lsNotes);
    if(lsNotes === null){
       addNote();
    }
    else{
        lsNotes.forEach((lsNote) => {
            addNote(lsNote);
        })
    }
    }
 
 )()
 
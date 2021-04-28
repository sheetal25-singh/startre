console.log('this is my new projet')
showNotes();
let add_button = document.getElementById('add_button');
add_button.addEventListener("click" , function(e){
    let addtext = document.getElementById('addtext');
    let notes= localStorage.getItem("notes");
    if (notes==null) {
        notesobj=[];

    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addtext.value);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    addtext.value='';
    console.log(notesobj);
    showNotes();
  
})
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes==null) {
        notesobj=[];

    }
    else{
        notesobj=JSON.parse(notes);
    }
    let html="";
    notesobj.forEach(function (element, index) {
        
    html += `
    
    <div class="row container-fluid" id="notes">
          <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button id= "${index}" onclick ="deleteNote(this.id)" class="btn btn-primary">Delete notes</button>
                </div>
                </div>
                
             `
        
    });
    let noteselm = document.getElementById('notes');
    if(notesobj.length !=0){
        noteselm.innerHTML = html;
    }

    
}
function deleteNote(index) {
    console.log('i am deleting this item');
    let notes = localStorage.getItem("notes");
    if (notes==null) {
        notesobj=[];

    }
    else{
        notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesobj));  
    showNotes();

    
}
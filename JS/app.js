console.log('this is project1..');

showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    
    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element,index) {
    html +=` <div class="notecard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${index+1}</h5>
      <p class="card-text">${element}</p>
      <button id="${index}" onclick="deleteNote(this.id)" class="btn
      btn-primary">Delete Note</button>
    </div>
  </div>`
    })
     let notesElem = document.getElementById('notes')
     if(notesObj.length != 0){
         notesElem.innerHTML = html;
     }
     else{
         notesElem.innerHTML = `there is nothing to show use the add note option above to add some new notes`
     }
}

function deleteNote(index){
    console.log('I am deleting this note',index)
    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();   
}

let searchTxt = document.getElementById('searchTxt')
searchTxt.addEventListener('input',function(){
    inputVal = searchTxt.value
    let notecard = document.getElementsByClassName('notecard')
    Array.from(notecard).forEach(function(element){ 
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = 'block'
        }
        else{
            element.style.display = 'none'

        }

        // console.log(cardTxt);
    })
})
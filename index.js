let hyperlink = document.getElementById("hyperLink")

let notesForm = document.getElementById("notesForm")

let populateBtn = document.getElementById("populateBtn")

function createNote(note) {
    let li = document.createElement('li')
    li.textContent = `${note}  `
    document.querySelector('#noteContainer').appendChild(li)
    let btn = document.createElement('button')
    btn.textContent = 'x'
    btn.addEventListener('click', handleDelete)
    li.appendChild(btn)
}

function handleDelete(e) {
    e.target.parentNode.remove()
}

function drawCards() {
    fetch("string representing a URL to a data source")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  });
}

document.addEventListener('DOMContentLoaded', e => {
    
    notesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target.notes.value)
        createNote(e.target.notes.value);
        notesForm.reset();
      })

    populateBtn.addEventListener("click", e => {
        console.log(populateBtn)
        drawCards()
    })

    /*hyperlink.addEventListener("mouseover", e => handleMouseOver(e))
    
    function handleMouseOver (e) {
        console.log(hyperlink.style.color)
        
        hyperlink.style.color= "red"
        
        console.log(hyperlink.style.color)
    }*/



})
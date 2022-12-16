let hyperlink = document.getElementById("hyperLink")

let notesForm = document.getElementById("notesForm")
console.log(document.getElementById("notesForm"))
console.log(hyperlink.style.color)

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

document.addEventListener('DOMContentLoaded', e => {
    
    notesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target.notes.value)
        createNote(e.target.notes.value);
        notesForm.reset();
      })

    /*hyperlink.addEventListener("mouseover", e => handleMouseOver(e))
    
    function handleMouseOver (e) {
        console.log(hyperlink.style.color)
        
        hyperlink.style.color= "red"
        
        console.log(hyperlink.style.color)
    }*/



})
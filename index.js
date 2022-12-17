let hyperlink = document.getElementById("hyperLink")
console.log(document.getElementById("hyperLink"))
let notesForm = document.getElementById("notesForm")
console.log(document.getElementById("notesForm"))
let populateBtn = document.getElementById("populateBtn")
console.log(document.getElementById("populateBtn"))
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
    fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=6")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data);
    console.log(data.cards)
    for (i = 0; i <= data.cards.length-1; i++) {
        let newImg = document.createElement("img")
        newImg.src=`${data.cards[i].image}`
        newImg.className= "responsive"
        if (i < 2) {
            console.log(`${data.cards[i].image}`)
            document.getElementById("player1List").appendChild(newImg)
        } else if (i < 4) {
            console.log(`${data.cards[i].image}`)
            document.getElementById("player2List").appendChild(newImg)
        } else {
            console.log(`${data.cards[i].image}`)
            document.getElementById("player3List").appendChild(newImg)
        }
    
    }
    
});
}

document.addEventListener('DOMContentLoaded', e => {
    
    notesForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e.target.notes.value)
        createNote(e.target.notes.value)
        notesForm.reset()
      })

    populateBtn.addEventListener("click", e => {
        console.log(populateBtn)
        drawCards()
    })

    hyperlink.addEventListener("mouseover", e => handleMouseOver(e))
    
    hyperlink.addEventListener("mouseout", e => handleMouseOut(e))
    function handleMouseOver () {
        console.log(hyperlink.style.color)
        
        hyperlink.style.color= "red"
        
        console.log(hyperlink.style.color)
    }

    function handleMouseOut () {
        console.log(hyperlink.style.color)

        hyperlink.style.color = "blue"
    }




})
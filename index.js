//variable for hyperlink to poker site
let hyperlink = document.getElementById("hyperLink")
//console.log(document.getElementById("hyperLink"))

//variable for the notes form
let notesForm = document.getElementById("notesForm")
//console.log(document.getElementById("notesForm"))

//variable for the populate button
let populateBtn = document.getElementById("populateBtn")
//console.log(document.getElementById("populateBtn"))

//variable for the calculate button
//let calculateBtn = document.getElementById("calculateBtn")
//console.log(document.getElementById("calculateBtn"))


function createNote(note) {
    let li = document.createElement('li')
    li.textContent = `${note}  `
    document.querySelector('#noteContainer').appendChild(li)
    let btn = document.createElement('button')
    btn.textContent = 'x'
    btn.addEventListener('click', handleDelete)
    li.appendChild(btn)
}

//deletes the attatched note when called
function handleDelete(e) {
    e.target.parentNode.remove()
}

//sends fetch request to card API for 6 cards, iterates over the returned obj,
//making an <img> for each with a class of "responsive" and an id of card[i+1].
//then places it in player divs.
function drawCards() {
    fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=6")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    //console.log(data);
    console.log(data.cards)
    
    for (i = 0; i <= data.cards.length-1; i++) {
        let newImg = document.createElement("img")
        newImg.src=`${data.cards[i].image}`
        newImg.className= "responsive"
        newImg.id= `${data.cards[i].code}`
        if (i < 2) {
            //console.log(`${data.cards[i].image}`)
            document.getElementById("player1List").appendChild(newImg)
        } else if (i < 4) {
            //console.log(`${data.cards[i].image}`)
            document.getElementById("player2List").appendChild(newImg)
        } else {
            //console.log(`${data.cards[i].image}`)
            document.getElementById("player3List").appendChild(newImg)
        }
    
    }
    
});
}

function strengthCalc() {

}

//contains actions to run only after DOM has loaded
document.addEventListener('DOMContentLoaded', e => {
    
    //when notes are submitted, supresses default action, logs the note,
    //creates a notes <p> with an attatched button that deletes it
    notesForm.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e.target.notes.value)
        createNote(e.target.notes.value)
        notesForm.reset()
      })

    //calls drawCards when populate button is clicked
    populateBtn.addEventListener("click", e => {
        console.log(populateBtn)
        drawCards()
    })

    //calls strengthCalc when button is clicked
   // calculateBtn.addEventListener("click", e => {
        //console.log(document.getElementById("playerHands"))
        //strengthCalc()
    //})

    //calls appropriate handler when hover events happen to hyperlink
    hyperlink.addEventListener("mouseover", e => handleMouseOver(e))
    hyperlink.addEventListener("mouseout", e => handleMouseOut(e))
    
    //turns hyperlink red when called
    function handleMouseOver () {
        
        hyperlink.style.color= "red"
        
    }

    //turns hyperlink blue when called
    function handleMouseOut () {

        hyperlink.style.color = "blue"
    }




})
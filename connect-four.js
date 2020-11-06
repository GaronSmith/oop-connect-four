// TO-DO
import { Game } from "./game.js"

window.addEventListener("DOMContentLoaded", event => {
/*
TODO

[*] create counter
[*] create column object

[*] add eventlistener to show whose turn

[*]create function to take in the column clicked and object counter
   this then creates a new div
   set attribute of new div to token color
   append to clicked square


*/




let GAME = undefined

let counter = 1;

let columns = {};

let currentPlayer = 'red'

const changePlayer = count => {
    if (count % 2 === 0){
        currentPlayer = 'black'
    } else {
        currentPlayer = 'red'
    }
}


// event listener hover

const columnHeaders = document.getElementById('click-targets')

 columnHeaders.addEventListener('mouseover', event => {
    if (event.target.id !== 'click-targets') {
        document.getElementById(event.target.id).classList.add('token', currentPlayer)
    }
 })
 columnHeaders.addEventListener('mouseout', event => {
    if (event.target.id !== 'click-targets') {
        document.getElementById(event.target.id).classList.remove('token', currentPlayer)
    }
 })


columnHeaders.addEventListener('click', event =>{
    let click = event.target.id


    if (columns[click]){
        columns[click] -= 1;
    } else {
        columns[click] = 5
    }

    if(columns[click] === 0) {
        document.getElementById(click).classList.add('full')
    }
    let columnClick = click.split('-')[1]
    let row = columns[click]

    let position = document.createElement('div');
    position.classList.add('token', currentPlayer)

    let nextSquare = document.getElementById(`square-${row}-${columnClick}`)
    nextSquare.appendChild(position)

    counter++

    let oldColor = currentPlayer
    changePlayer(counter)
    document.getElementById(click).classList.replace(oldColor, currentPlayer)
})

    let playerOneText = document.getElementById("player-1-name")
    let playerTwoText = document.getElementById("player-2-name")
    let newGame = document.getElementById("new-game")

    playerOneText.addEventListener("keyup", event =>{

        if (playerOneText.value && playerTwoText.value) {
            newGame.removeAttribute("disabled")
        }


    })






})

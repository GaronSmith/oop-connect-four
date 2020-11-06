// TO-DO
import { Game } from "./game.js"

import { Columns } from "./column.js"

let currentPlayer = 'red'

let GAME = undefined

const boardHolder = document.getElementById('board-holder')
const gameName = document.getElementById('game-name')


const updateUI = () => {
    if(GAME === undefined) {
        boardHolder.classList.add('is-invisible')
    } else {
        boardHolder.classList.remove('is-invisible')
        gameName.innerHTML = GAME.getName()
    }

    if(GAME.currentPlayer === 1) {
        currentPlayer = "red"
    } else {
        currentPlayer = "black"
    }

}
window.addEventListener("DOMContentLoaded", event => {


let columns = {};

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

 columnHeaders.addEventListener("click", event => {

    console.log(currentPlayer)
    GAME.playInColumn()
    updateUI()

 })

let playerOneText = document.getElementById("player-1-name")
let playerTwoText = document.getElementById("player-2-name")
let newGame = document.getElementById("new-game")

playerOneText.addEventListener("keyup", event =>{

    if (playerOneText.value && playerTwoText.value) {
        newGame.removeAttribute("disabled")
    }


})
playerTwoText.addEventListener("keyup", event => {

    if (playerOneText.value && playerTwoText.value) {
        newGame.removeAttribute("disabled")
    }
})

newGame.addEventListener('click', event => {
    GAME = new Game(playerOneText.value, playerTwoText.value);
    playerOneText.value = ''
    playerTwoText.value = ''
    newGame.setAttribute('disabled','disabled')
    updateUI() // TODO - define
    console.log(GAME)
})




})

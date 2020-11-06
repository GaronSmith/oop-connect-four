

export class Columns {
    constructor(arr = []){
        this.arr = arr
    }
    add(playerNum) {
        this.arr.unshift(playerNum)
    }
    getTokenAt(index) {

        if(!arr[index]) {
            return null
        } else {
            return arr[index]
        }

    }


}







































// columnHeaders.addEventListener('click', event =>{
//     let click = event.target.id


//     if (columns[click]){
//         columns[click] -= 1;
//     } else {
//         columns[click] = 5
//     }

//     console.log(columns)

//     if(columns[click] === 0) {
//         document.getElementById(click).classList.add('full')
//     }
//     let columnClick = click.split('-')[1]
//     let row = columns[click]

//     let position = document.createElement('div');
//     position.classList.add('token', currentPlayer)

//     let nextSquare = document.getElementById(`square-${row}-${columnClick}`)
//     nextSquare.appendChild(position)

//     counter++

//     let oldColor = currentPlayer
//     changePlayer(counter)
//     document.getElementById(click).classList.replace(oldColor, currentPlayer)
// })

let selectedArray = [];


function createNumbers() {
    let parentDiv = document.getElementsByClassName('bingoBoard')[0]
    for (let i = 1; i <= 76; i++) {
        let numberDiv = document.createElement('div');
        numberDiv.innerHTML = i
        numberDiv.classList.add('number')
        numberDiv.classList.add(`div${i}`)
        parentDiv.appendChild(numberDiv);
    }
}

createNumbers()


function generateRandom() {
    let randomNum = Math.floor(Math.random() * 76) + 1;
    while (selectedArray.includes(randomNum)) {
        randomNum = Math.floor(Math.random() * 76) + 1;
    }
    selectedArray.push(randomNum)
    let selectedNumbers = document.getElementsByClassName(`div${randomNum}`)
    for (let selectedNumber of selectedNumbers) {
        selectedNumber.classList.add('selected')
    }

}


function startGame() {
    console.log('test');
    let userBoards = document.getElementsByTagName('input')[0].value

    let setNumberDiv = document.getElementsByClassName('setNumber')[0]
    setNumberDiv.classList.add('hideElement')
    console.log(userBoards)

    let parentUserDiv = document.getElementsByClassName('userSection')[0]
    for (let i = 0; i < userBoards; i++) {
        let userBoard = document.createElement('div');
        userBoard.classList.add('userBoard')
        parentUserDiv.appendChild(userBoard);

        let doubleNumbers = [];
        for (let i = 1; i <= 24; i++) {
            let numberDiv = document.createElement('div');
            let randomNum = Math.floor(Math.random() * 76) + 1;
            while (doubleNumbers.includes(randomNum)) {
                randomNum = Math.floor(Math.random() * 76) + 1;
            }
            numberDiv.innerHTML = randomNum;
            doubleNumbers.push(randomNum)
            numberDiv.classList.add('number')
            numberDiv.classList.add(`div${randomNum}`)
            userBoard.appendChild(numberDiv);
        }
    }


} 
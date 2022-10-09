/* To be comfirmed the web status is ready*/
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var tableRow = document.getElementsByTagName('tr');
    var tableRowData = document.getElementsByTagName('td');
    var tableCell = document.querySelector('.cell');
    const gameStatus = document.querySelector('#game-status');
    const gameRestart = document.querySelector('#game-restart');
    const colCount = 7;
    const rowCount = 6;
    let gameActive = true;

    const min = num => Math.max(num - 3, 0);
    const max = (num, max) => Math.min(num + 3, max);

    for (let i = 0; i < tableRowData.length; i++) {
        tableRowData[i].addEventListener('click', (e) => {
            console.log(`${e.target.parentElement.rowIndex}`, `${e.target.cellIndex}`)
        })
    }

    while (!player1) {
        var player1 = prompt('Player One: Enter your name. You will be red.');
    }

    player1Color = 'red';

    while (!player2) {
        var player2 = prompt('Player Two: Enter your name. You will be yellow.');
    }

    player2Color = 'yellow';

    var currentPlayer = player1;

    /* Game status message will be displayed when the game gets the winner or draw state.
    The data for current player is dynamic, so the printed data will go with the current player data */
    const winningMessage = () => `Player ${currentPlayer} has won!`;
    const drawMessage = () => `You got a tie game!`;
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

    /* The inital message announes the current player turn */
    gameStatus.innerHTML = currentPlayerTurn();

    Array.prototype.forEach.call(tableRowData, (cell) => {
        cell.addEventListener('click', handleCellClick);
        cell.style.backgroundColor = 'white';
        //console.log("first data: ", cell);
    });


    function handleCellClick(clickedCellEvent) {
        /* The clicked html elements will be saved as varibles to use easier later on */
        const clickedCell = clickedCellEvent.target;
        console.log("data: ", clickedCell);
        /* Get clicked cell index by data-cell-index attribute to identify the cell number.
        getAttribute returns string value, so we need to parse it into integer number */
        //const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

        const clickedCellIndex = clickedCell.cellIndex;
        const teste = clickedCell.parentElement.rowIndex;
        console.log(teste);
        console.log(clickedCellIndex);

        /* We need to check the game status and the cell has been played? */
        if (!gameActive) {
            return;
        }

        /* If everything is fine, game flow will be proceeded */
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation(clickedCell, clickedCellIndex);
    }

    function handleResultValidation(clickedCell, clickedCellIndex) {
        if (horizontalCheck(clickedCell)) {
            gameStatus.innerHTML = winningMessage();
            gameActive = false;
            return;
        }

        if (verticalCheck(clickedCellIndex)) {
            gameStatus.innerHTML = winningMessage();
            gameActive = false;
            return;
        }

        /* The game will continue here with other player turn */
        handlePlayerChange();
    }

    function handleCellPlayed(clickedCell, clickedCellIndex) {

        if (clickedCell.style.backgroundColor !== 'white') {

            alert("This slot has been played!!!");
            return;

        } else {
            if (currentPlayer === player1) {

                clickedCell.style.backgroundColor = player1Color;

            } else {

                clickedCell.style.backgroundColor = player2Color;

            }
        }
    }

    /* We change the player turn */
    function handlePlayerChange() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        gameStatus.innerHTML = currentPlayerTurn();
    }


    function colorMatchCheck(one, two, three, four) {
        return (one == two && one == three && one == four && one !== 'white');

    }


    function horizontalCheck(clickedCell) {
        let currentRow = clickedCell.parentElement.rowIndex;

        for (let col = 0; col < 4; col++) {
            if (colorMatchCheck(tableRow[currentRow].children[col].style.backgroundColor,
                    tableRow[currentRow].children[col + 1].style.backgroundColor,
                    tableRow[currentRow].children[col + 2].style.backgroundColor,
                    tableRow[currentRow].children[col + 3].style.backgroundColor)) {
                return true;
            }
        }
    }

    function verticalCheck(clickedCellIndex) {
        console.log("clickedCellindex here: ", clickedCellIndex)
        for (let row = 0; row < 3; row++) {
            if (colorMatchCheck(tableRow[row].children[clickedCellIndex].style.backgroundColor,
                    tableRow[row + 1].children[clickedCellIndex].style.backgroundColor,
                    tableRow[row + 2].children[clickedCellIndex].style.backgroundColor,
                    tableRow[row + 3].children[clickedCellIndex].style.backgroundColor)) {
                return true;
            }
        }
    }

    /* Event listeners are added into the game cells and restart buttons */
    //document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
}
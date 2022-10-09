/* To be comfirmed the web status is ready*/
if (document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    /* Game status would be saved here to be adjusted later easily */
    const statusDisplay = document.querySelector('#game-status');

    /* Declare variables used for tracking the game status */

    /* gameActive to check the game status */
    let gameActive = true;

    /* Current player */
    let currentPlayer = "X";

    /* gameState helps us to save the current state of the game. 
    Empty string allows to track played cells and validate the game state later on */
    let gameState = ["", "", "", "", "", "", "", "", ""];

    /* Game status message will be displayed when the game gets the winner or draw state.
    The data for current player is dynamic, so the printed data will go with the current player data */
    const winningMessage = () => `Player ${currentPlayer} has won!`;
    const drawMessage = () => `You got a tie game!`;
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

    /* The inital message announes the current player turn */
    statusDisplay.innerHTML = currentPlayerTurn();

    /* We assign the current player sign to the clicked cell */
    function handleCellPlayed(clickedCell, clickedCellIndex) {
        /* Update internal game state to reflect the played move */
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }

    /* We change the player turn */
    function handlePlayerChange() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.innerHTML = currentPlayerTurn();
    }

    /* Winning condition table */
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    /* We checking the game status after each player turn */
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; ++i) {
            const winCondition = winningConditions[i];
            console.log(winCondition);
            let a = gameState[winCondition[0]];
            let b = gameState[winCondition[1]];
            let c = gameState[winCondition[2]];
            console.log("here is something", a, b, c);

            /* Check weather the cell has been signed or not */
            if (a === '' || b === '' || c === '') {
                continue;
            }

            /* If no, the winning condition is applied */
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        /* Display winning message */
        if (roundWon) {
            statusDisplay.innerHTML = winningMessage();
            gameActive = false;
            return;
        }

        /* We check weather the game is ended in a draw */
        let roundDraw = !gameState.includes("");
        if (roundDraw) {
            statusDisplay.innerHTML = drawMessage();
            gameActive = false;
            return;
        }

        /* The game will continue here with other player turn */
        handlePlayerChange();

    }

    function handleCellClick(clickedCellEvent) {
        /* The clicked html elements will be saved as varibles to use easier later on */
        const clickedCell = clickedCellEvent.target;

        /* Get clicked cell index by data-cell-index attribute to identify the cell number.
        getAttribute returns string value, so we need to parse it into integer number */
        const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

        /* We need to check the game status and the cell has been played? */
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        /* If everything is fine, game flow will be proceeded */
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }

    function handleRestartGame() {
        gameActive = true;
        currentPlayer = "X";
        gameState = ["", "", "", "", "", "", "", "", ""];
        statusDisplay.innerHTML = currentPlayerTurn();
        document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    }

    /* Event listeners are added into the game cells and restart buttons */
    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
    document.querySelector('#game-restart').addEventListener('click', handleRestartGame);
}
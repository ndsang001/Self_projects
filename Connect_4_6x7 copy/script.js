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
    /*
    while (!player2) {
        var player2 = prompt('Player Two: Enter your name. You will be yellow.');
    }
*/
    var player2 = "AI";
    player2Color = 'yellow';

    var currentPlayer;

    // select the first turn randomly 
    function selectFirstPlayer() {
        var randomPlayer = Math.random();
        console.log(randomPlayer);
        if (randomPlayer > 0.5) {
            currentPlayer = player1;
        } else {
            currentPlayer = player2;
        }
        console.log("random player: ", currentPlayer);
    }

    /* Game status message will be displayed when the game gets the winner or draw state.
    The data for current player is dynamic, so the printed data will go with the current player data */
    const winningMessage = () => `Player ${currentPlayer} has won!`;
    const drawMessage = () => `You got a tie game!`;
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

    /* The inital message announes the current player turn */
    //gameStatus.innerHTML = currentPlayerTurn();


    setNewGame();

    function setNewGame() {
        selectFirstPlayer();
        Array.prototype.forEach.call(tableRowData, (cell) => {
            cell.style.backgroundColor = 'white';
        })
        handlePlayerChange();
        Array.prototype.forEach.call(tableRowData, (cell) => {
            cell.addEventListener('click', handleCellClick);

            //console.log("first data: ", cell);
        });
    }

    function handleCellClick(clickedCellEvent) {
        /* The clicked html elements will be saved as varibles to use easier later on */
        const clickedCell = clickedCellEvent.target;
        console.log("data: ", clickedCell);

        const clickedCellIndex = clickedCell.cellIndex;
        const teste = clickedCell.parentElement.rowIndex;
        console.log(teste);
        console.log(clickedCellIndex);

        /* We need to check the game status and the cell has been played? */
        if (!gameActive) {
            return;
        }

        /* If everything is fine, game flow will be proceeded */
        handleCellPlayed(clickedCellIndex);
        handleResultValidation();
    }

    function handleResultValidation() {

        if (horizontalCheck() || verticalCheck() || diagonalCheck() || diagonalCheck2()) {
            let a = gameStatus.innerHTML = winningMessage();
            gameActive = false;
            return alert(a);
        } else if (drawCheck()) {
            let a = gameStatus.innerHTML = drawMessage();
            gameActive = false;
            return alert(a);
        }
        /* The game will continue here with other player turn */
        handlePlayerChange();
    }

    function handleCellPlayed(clickedCellIndex) {
        let row = [];

        for (let i = 5; i > -1; i--) {
            if (tableRow[i].children[clickedCellIndex].style.backgroundColor == 'white') {

                row.push(tableRow[i].children[clickedCellIndex]);

                if (currentPlayer === player1) {

                    row[0].style.backgroundColor = player1Color;
                    return;

                } else {

                    row[0].style.backgroundColor = player2Color;
                    return;

                }
            }
        }
    }

    /* We change the player turn */
    function handlePlayerChange() {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        gameStatus.innerHTML = currentPlayerTurn();

        if (currentPlayer == player2) {
            ai();
        }
    }

    // AI gets turn to continue the game
    function ai() {
        let board = create_a_board();
        let col = minimax(board, 4, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, true);
        //let col = 0;
        if (is_valid_location(board, col[0])) {
            handleCellPlayed(col[0]);
            handleResultValidation();
        }
    }

    function score_position(board) {
        let score = 0;

        //Score center column
        let centre_array = [];
        for (let row = 0; row < rowCount; ++row) {
            centre_array.push(board[row][3]);
        }
        let centre_count = centre_array.filter(x => x == 2).length;
        score += centre_count * 3;

        // Score horizontal
        let row_array = [];

        for (let r = 0; r < rowCount; ++r) {
            row_array = board[r];

            for (let col = 0; col < colCount - 3; col++) {
                let window = [];
                for (let i = col; i < col + 4; i++) {
                    window.push(row_array[i]);
                }

                score += evaluate_window(window);

            }
        }

        // Score vertical
        for (let col = 0; col < colCount; ++col) {
            let col_array = []
            for (let row = 0; row < rowCount; ++row) {
                col_array.push(board[row][col]);
            }

            for (let row = 0; row < rowCount - 3; ++row) {
                let window = [];
                for (let i = row; i < row + 4; ++i) {
                    window.push(col_array[i]);
                }

                score += evaluate_window(window);

            }

        }

        // Score sloped diagonal
        for (let row = 0; row < rowCount - 3; ++row) {
            for (let col = 0; col < colCount - 3; ++col) {
                let window = []
                for (let i = 0; i < 4; ++i) {
                    window[i] = board[row + i][col + i];
                }

                score += evaluate_window(window);

            }
        }

        for (let row = 0; row < rowCount - 3; ++row) {
            for (let col = 0; col < colCount - 3; ++col) {
                let window = [];
                for (let i = 0; i < 4; ++i) {
                    window[i] = board[row + 3 - i][col + i];
                }

                score += evaluate_window(window);

            }
        }

        return score

    }

    function evaluate_window(window) {
        let score = 0;

        if (window.filter(x => x == 2).length == 4) {
            score += 100;
        } else if (window.filter(x => x == 2).length == 3 && window.filter(x => x == 0).length == 1) {
            score += 5;
        } else if (window.filter(x => x == 2).length == 2 && window.filter(x => x == 0).length == 2) {
            score += 2;
        }

        if (window.filter(x => x == 1).length == 3 && window.filter(x => x == 0).length == 1) {
            score -= 4;
        }

        return score;
    }

    function minimax(board, depth, alpha, beta, maximizingPlayer) {
        let valid_locations = get_valid_locations(board);
        console.log(" valid location length; ", valid_locations.length)
        let is_terminal = is_terminal_node(board);
        console.log("is terminal: ", is_terminal)
        console.log("depth: ", depth)
        if (depth == 0 || is_terminal) {
            if (is_terminal) {
                if (winning_move(board, player2)) {
                    console.log("may win");
                    return [null, 100000000000000];
                } else if (winning_move(board, player1)) {
                    console.log("nguoi win");
                    return [null, 100000000000000];
                } else { // Game is over
                    return [null, 0]
                }
            } else { // Depth = 0
                return [null, score_position(board)]
            }
        }

        if (maximizingPlayer) {
            let value = Number.NEGATIVE_INFINITY;
            let column = Math.floor(Math.random() * valid_locations.length);
            column = valid_locations[column];
            for (let col = 0; col < valid_locations.length; col++) {
                let row = get_next_open_row(board, valid_locations[col]);
                let b_copy = board.slice();
                console.log("valid col in max: ", valid_locations[col]);
                drop_piece(b_copy, row, valid_locations[col], player2);
                let new_score = minimax(b_copy, depth - 1, alpha, beta, false);
                if (new_score[1] > value) {
                    value = new_score[1];
                    column = valid_locations[col];
                }
                alpha = Math.max(alpha, value);
                if (alpha >= beta) {
                    break;
                }

            }

            return [column, value];
        } else { // Minimizing player
            let value = Number.POSITIVE_INFINITY;
            let column = Math.floor(Math.random() * valid_locations.length);
            column = valid_locations[column];
            for (let col = 0; col < valid_locations.length; col++) {
                let row = get_next_open_row(board, valid_locations[col]);
                let b_copy = board.slice();
                console.log("valid col in min: ", valid_locations[col]);
                drop_piece(b_copy, row, valid_locations[col], player1);
                let new_score = minimax(b_copy, depth - 1, alpha, beta, true);
                if (new_score[1] < value) {
                    value = new_score[1];
                    column = valid_locations[col];
                }
                beta = Math.min(beta, value);
                if (alpha >= beta) {
                    break;
                }

            }

            return [column, value];
        }
    }

    function drop_piece(board, row, col, player) {
        console.log("col in drop piece: ", col);
        if (player == player1) {
            board[row][col] = 1;
        } else {
            board[row][col] = 2;
        }

    }

    function is_terminal_node(board) {
        return winning_move(board, player1) || winning_move(board, player2) || get_valid_locations(board).length == 0;
    }

    function winning_move(board, player) {
        let currentNumber;
        if (player == player1) {
            currentNumber = 1;
        } else {
            currentNumber = 2;
        }

        // horizontal check
        for (let row = 0; row < tableRow.length; row++) {
            for (let col = 0; col < 4; col++) {
                if (board[row][col] == currentNumber &&
                    board[row][col + 1] == currentNumber &&
                    board[row][col + 2] == currentNumber &&
                    board[row][col + 3] == currentNumber) {
                    return true;
                }
            }
        }

        // vertical check
        for (let col = 0; col < colCount; ++col) {
            for (let row = 0; row < 3; row++) {
                if (board[row][col] == currentNumber &&
                    board[row + 1][col] == currentNumber &&
                    board[row + 2][col] == currentNumber &&
                    board[row + 3][col] == currentNumber) {
                    return true;
                }
            }
        }

        // diagonal 1 check
        for (let col = 0; col < 4; col++) {
            for (let row = 0; row < 3; row++) {
                if (board[row][col] == currentNumber &&
                    board[row + 1][col + 1] == currentNumber &&
                    board[row + 2][col + 2] == currentNumber &&
                    board[row + 3][col + 3] == currentNumber) {
                    return true;
                }
            }
        }

        // diagonal 2 check
        for (let col = 0; col < 4; col++) {
            for (let row = 5; row > 2; row--) {
                if (board[row][col] == currentNumber &&
                    board[row - 1][col + 1] == currentNumber &&
                    board[row - 2][col + 2] == currentNumber &&
                    board[row - 3][col + 3] == currentNumber) {
                    return true;
                }
            }
        }
    }

    // Create a virtual board from the original one
    function create_a_board() {
        let board = [];
        for (let row = 0; row < rowCount; ++row) {
            board[row] = new Array();

            for (let col = 0; col < colCount; ++col) {
                if (tableRow[row].children[col].style.backgroundColor == "white") {
                    board[row][col] = 0;
                } else if (tableRow[row].children[col].style.backgroundColor == "red") {
                    board[row][col] = 1;
                } else {
                    board[row][col] = 2;
                }
            }
        }
        console.log("Virtual board: ", board);
        return board;
    }

    // Get the next open row
    function get_next_open_row(board, col) {
        for (let row = rowCount - 1; row >= 0; --row) {
            if (board[row][col] == 0) {
                return row;
            }
        }
    }

    // Get the list of valid location
    function get_valid_locations(board) {
        let valid_locations = [];
        for (let col = 0; col < colCount; ++col) {
            if (is_valid_location(board, col)) {
                valid_locations.push(col);
            }
        }
        console.log("Valid location is: ", valid_locations);
        return valid_locations;
    }

    function is_valid_location(board, col) {

        return board[0][col] == 0;

    }

    function colorMatchCheck(one, two, three, four) {
        return (one == two && one == three && one == four && one !== 'white');

    }


    function horizontalCheck() {
        for (let row = 0; row < rowCount - 3; ++row) {
            for (let col = 0; col < colCount - 3; col++) {
                if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
                        tableRow[row].children[col + 1].style.backgroundColor,
                        tableRow[row].children[col + 2].style.backgroundColor,
                        tableRow[row].children[col + 3].style.backgroundColor)) {
                    return true;
                }
            }
        }

    }

    function verticalCheck() {
        //console.log("clickedCellindex here: ", clickedCellIndex)
        for (let col = 0; col < colCount - 3; ++col) {
            for (let row = 0; row < rowCount - 3; row++) {
                if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor,
                        tableRow[row + 1].children[col].style.backgroundColor,
                        tableRow[row + 2].children[col].style.backgroundColor,
                        tableRow[row + 3].children[col].style.backgroundColor)) {
                    return true;
                }
            }
        }

    }

    function diagonalCheck() {
        for (let col = 0; col < 4; col++) {
            for (let row = 0; row < 3; row++) {
                if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row + 1].children[col + 1].style.backgroundColor,
                        tableRow[row + 2].children[col + 2].style.backgroundColor, tableRow[row + 3].children[col + 3].style.backgroundColor)) {
                    return true;
                }
            }
        }

    }

    function diagonalCheck2() {
        for (let col = 0; col < 4; col++) {
            for (let row = 5; row > 2; row--) {
                if (colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row - 1].children[col + 1].style.backgroundColor,
                        tableRow[row - 2].children[col + 2].style.backgroundColor, tableRow[row - 3].children[col + 3].style.backgroundColor)) {
                    return true;
                }
            }
        }
    }

    function drawCheck() {
        let fullSlot = []
        for (i = 0; i < tableRowData.length; i++) {
            if (tableRowData[i].style.backgroundColor !== 'white') {
                fullSlot.push(tableRowData[i]);
            }
        }
        if (fullSlot.length === tableRowData.length) {
            return true;
        }
    }

    function handleRestartGame() {
        gameActive = true;
        currentPlayer = player1;
        gameStatus.innerHTML = currentPlayerTurn();
        setNewGame();
    }

    /* Event listeners are added into the game cells and restart buttons */
    document.querySelector('#game-restart').addEventListener('click', handleRestartGame);
}
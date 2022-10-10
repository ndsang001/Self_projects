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
    var tableCellAll = document.querySelectorAll('.cell');
    const gameStatus = document.querySelector('#game-status');
    const gameRestart = document.querySelector('#game-restart');
    const colCount = 7;
    const rowCount = 6;
    var delayInMilliseconds = 500; // 0,5 second
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

    var player2 = "AI"

    player2Color = 'yellow';

    var currentPlayer;

    function selectFirstPlayer() {
        var randomPlayer = Math.random();
        console.log(randomPlayer);
        if (randomPlayer > 0.5) {
            currentPlayer = player1;
        } else {
            currentPlayer = player2;
        }
        console.log("random player: ", currentPlayer);
        return;
    }

    /* Game status message will be displayed when the game gets the winner or draw state.
    The data for current player is dynamic, so the printed data will go with the current player data */
    const winningMessage = () => `Player ${currentPlayer} has won!`;
    const drawMessage = () => `You got a tie game!`;
    const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

    /* The inital message announes the current player turn */
    gameStatus.innerHTML = currentPlayerTurn();

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
    /*
    tableCellAll.forEach(element => {
        console.log("here is end table cell: ", element)
    })*/

    //console.log(tableRow[0].childNodes);
    //console.log(tableRow[0].children[0]);
    //console.log("Here is table row data: ", tableRowData[0])

    function handleCellClick(clickedCellEvent) {
        /* The clicked html elements will be saved as varibles to use easier later on */
        const clickedCell = clickedCellEvent.target;
        console.log("data: ", clickedCell);

        const clickedCellIndex = clickedCell.cellIndex;
        const currentRow = clickedCell.parentElement.rowIndex;
        console.log(currentRow);
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
        //score_position();
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
            } else if (tableRow[0].children[clickedCellIndex].style.backgroundColor != 'white') {
                alert("This column is full!!!")
                currentPlayer = player2;
                return;
            }
        }

    }

    /* AI test*/
    function ai() {
        //let col = Math.floor(Math.random() * colCount);
        //let col = pick_best_move();
        let col;
        let board = create_temp_board();
        console.log("board board: ", board)
            //if (first_turn()) {
            //    col = pick_best_move()
            //   console.log("im here")
            //} else {
        console.log("toi di day")
        col = minimax(board, 4, -Infinity, Infinity, true)[0];
        //}

        if (is_valid_location(col)) {
            handleCellPlayed(col);
            handleResultValidation(col);
        }

    }

    function first_turn() {

        for (let col = 0; col < colCount; ++col) {
            if (tableRow[5].children[col].style.backgroundColor != 'white') {
                return false;
            }
        }

        return true;

    }

    /* check the row of two or row of three for calculating the possible position score */
    /*function score_position() {
        // Score horizontal
        var score = 0;
        var row_array = [];

        for (let r = 0; r < rowCount; ++r) {
            row_array = tableRow[r].children;
            for (let col = 0; col < 4; col++) {
                let window = [];
                for (let i = col; i < col + 4; i++) {
                    window.push(row_array[i]);
                }
                console.log("here is window", window)
                if (window.filter(x => x.style.backgroundColor == player2Color).length == 4) {
                    score += 100
                } else if (window.filter(x => x.style.backgroundColor == player2Color).length == 3 &&
                    window.filter(x => x.style.backgroundColor == "white").length == 1) {
                    score += 10
                }
                console.log("here is b: ", window.filter(x => x.style.backgroundColor == player2Color).length)
            }
        }

        console.log("Score now: ", score)
        let temp_ = create_temp_board();
        console.log("Temp board: ", temp_)
        return score
    } */

    /* check the row of two or row of three for calculating the possible position score */
    function score_position(temp_board) {


        let score = 0;
        // Score centre column
        let centre_array = [];
        for (let i = 0; i < rowCount; ++i) {
            centre_array.push(temp_board[i][3]);
        }
        let centre_count = centre_array.filter(x => x == 2).length;
        score += centre_count * 3;

        // Score horizontal
        let row_array = [];

        for (let r = 0; r < rowCount; ++r) {
            row_array = temp_board[r];
            //console.log("Here is row array: ", row_array)
            for (let col = 0; col < colCount - 3; col++) {
                let window = [];
                for (let i = col; i < col + 4; i++) {
                    window.push(row_array[i]);
                }
                //console.log("here is window row ", window)
                score += evaluate_window(window);
                //console.log("here is b: ", window.filter(x => x == 2).length)
            }
        }

        // Score vertical
        for (let c = 0; c < colCount; ++c) {
            let col_array = []
            for (let r = 0; r < rowCount; ++r) {
                col_array.push(temp_board[r][c]);
            }
            //console.log("here is col array: ", col_array);
            for (let r = 0; r < rowCount - 3; ++r) {
                let window = [];
                for (let i = r; i < r + 4; ++i) {
                    window.push(col_array[i]);
                }
                //console.log("here is window col ", window)
                score += evaluate_window(window);
                //console.log("here is c: ", window.filter(x => x == 2).length)
            }

        }

        // Score sloped diagonal
        for (let r = 0; r < rowCount - 3; ++r) {
            for (let c = 0; c < colCount - 3; ++c) {
                let window = []
                for (let i = 0; i < 4; ++i) {
                    window[i] = temp_board[r + i][c + i];
                }
                //console.log("here is window sliped diagonal ", window)
                score += evaluate_window(window);
                //console.log("here is d: ", window.filter(x => x == 2).length)
            }
        }

        for (let r = 0; r < rowCount - 3; ++r) {
            for (let c = 0; c < colCount - 3; ++c) {
                let window = [];
                for (let i = 0; i < 4; ++i) {
                    window[i] = temp_board[r + 3 - i][c + i];
                }
                //console.log("here is window sliped diagonal 2", window)
                score += evaluate_window(window);
                //console.log("here is e: ", window.filter(x => x == 2).length)
            }
        }
        //console.log("Score now: ", score)
        //let temp_ = create_temp_board();
        //console.log("Temp board: ", temp_)
        return score
    }

    function minimax(board, depth, alpha, beta, maximizingPlayer) {
        console.log("abc : ", board, depth, alpha, beta, maximizingPlayer)
        let valid_locations = get_valid_locations2(board);
        console.log("valid location now: ", valid_locations)
        let is_terminal = is_terminal_node(board)
        console.log("is terminal: ", is_terminal)
        console.log("is depth: ", depth)
        if (depth == 0 || is_terminal) {
            if (is_terminal) {
                if (winning_move(board, player2)) {
                    return [null, 100000000000000];
                } else if (winning_move(board, player1)) {
                    return [null, -100000000000000];
                } else { // Game is over, no more valid moves
                    return [null, 0];
                }
            } else { // Depth is zero
                return [null, score_position(board)];
            }
        }

        if (maximizingPlayer) {
            let value = -Infinity;
            let column = Math.floor(Math.random() * valid_locations.length);
            column = valid_locations[column];
            for (let col = 0; col < valid_locations.length; ++col) {
                console.log("col max ", valid_locations[col])
                let row = get_next_open_row2(board, valid_locations[col])
                    //let b_copy = Array.from(board);
                let b_copy = board.slice();
                /*
                    let b_copy = JSON.stringify(board);
                b_copy = JSON.parse(b_copy);*/
                //console.log("b_copy 11: ", b_copy)
                //console.log("Temp board now: ", temp_board)
                drop_piece2(b_copy, row, valid_locations[col], player2);
                //drop_piece2(board, row, valid_locations[col], player1);
                //console.log("b_copy 21: ", b_copy)
                let new_score = minimax(b_copy, depth - 1, alpha, beta, false)[1]
                    //let new_score = minimax(board, depth - 1, alpha, beta, true)[1]
                console.log("new_score max : ", new_score)
                if (new_score > value) {
                    value = new_score;
                    column = valid_locations[col];
                }
                alpha = Math.max(alpha, value);
                if (alpha >= beta) {
                    break;
                }

            }
            console.log("column now at max : ", column, " value now max : ", value)
            return [column, value];

        } else { // Minimizing player
            let value = Infinity;
            let column = Math.floor(Math.random() * valid_locations.length);
            column = valid_locations[column];
            for (let col = 0; col < valid_locations.length; ++col) {
                console.log("col min ", valid_locations[col])
                let row = get_next_open_row2(board, valid_locations[col]);
                //let b_copy = Array.from(board);
                let b_copy = board.slice();
                /*let b_copy = JSON.stringify(board);
                b_copy = JSON.parse(b_copy);*/
                //console.log("b_copy 21: ", b_copy)
                //console.log("Temp board now: ", temp_board)
                drop_piece2(b_copy, row, valid_locations[col], player1);
                //drop_piece2(board, row, valid_locations[col], player1);
                //console.log("b_copy 22: ", b_copy)
                let new_score = minimax(b_copy, depth - 1, alpha, beta, true)[1]
                    //let new_score = minimax(board, depth - 1, alpha, beta, true)[1]
                console.log("new_score max: ", new_score)
                if (new_score < value) {
                    value = new_score;
                    column = valid_locations[col];
                }
                beta = Math.min(beta, value);
                if (alpha >= beta) {
                    break;
                }

            }
            console.log("column now min : ", column, " value now min: ", value)
            return [column, value];
        }
    }
    /*
        function winning_move(player) {
            let color;
            if (player == player1) {
                color = player1Color;
            } else {
                color = player2Color;
            }
            //console.log("color la: ", color)
            // horizontal check
            for (let row = 0; row < tableRow.length; row++) {
                for (let col = 0; col < 4; col++) {
                    if (tableRow[row].children[col].style.backgroundColor == color &&
                        tableRow[row].children[col + 1].style.backgroundColor == color &&
                        tableRow[row].children[col + 2].style.backgroundColor == color &&
                        tableRow[row].children[col + 3].style.backgroundColor == color) {
                        return true;
                    }
                }
            }

            // vertical check
            for (let col = 0; col < colCount; ++col) {
                for (let row = 0; row < 3; row++) {
                    if (tableRow[row].children[col].style.backgroundColor == color &&
                        tableRow[row + 1].children[col].style.backgroundColor == color &&
                        tableRow[row + 2].children[col].style.backgroundColor == color &&
                        tableRow[row + 3].children[col].style.backgroundColor == color) {
                        return true;
                    }
                }
            }

            // diagonal 1 check
            for (let col = 0; col < 4; col++) {
                for (let row = 0; row < 3; row++) {
                    if (tableRow[row].children[col].style.backgroundColor == color &&
                        tableRow[row + 1].children[col + 1].style.backgroundColor == color &&
                        tableRow[row + 2].children[col + 2].style.backgroundColor == color &&
                        tableRow[row + 3].children[col + 3].style.backgroundColor == color) {
                        return true;
                    }
                }
            }

            // diagonal 2 check
            for (let col = 0; col < 4; col++) {
                for (let row = 5; row > 2; row--) {
                    if (tableRow[row].children[col].style.backgroundColor == color &&
                        tableRow[row - 1].children[col + 1].style.backgroundColor == color &&
                        tableRow[row - 2].children[col + 2].style.backgroundColor == color &&
                        tableRow[row - 3].children[col + 3].style.backgroundColor == color) {
                        return true;
                    }
                }
            }
        }*/

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

    function is_terminal_node(board) {
        return winning_move(board, player1) || winning_move(board, player2) || get_valid_locations2(board).length == 0;
    }

    function evaluate_window(window) {
        let score = 0;

        if (window.filter(x => x == 2).length == 4) {
            score += 100
        } else if (window.filter(x => x == 2).length == 3 &&
            window.filter(x => x == 0).length == 1) {
            score += 5
        } else if (window.filter(x => x == 2).length == 2 && window.filter(x => x == 0).length == 2) {
            score += 2
        }

        if (window.filter(x => x == 1).length == 3 && window.filter(x => x == 0).length == 1) {
            score -= 4
        }

        return score;
    }

    function get_valid_locations() {
        let valid_locations = [];
        for (let col = 0; col < colCount; ++col) {
            if (is_valid_location(col)) {
                valid_locations.push(col)
            }
        }
        return valid_locations;

    }

    function get_valid_locations2(board) {
        let valid_locations = [];
        for (let col = 0; col < colCount; ++col) {
            if (is_valid_location2(board, col)) {
                valid_locations.push(col)
            }
        }
        return valid_locations;

    }

    function is_valid_location(col) {
        return tableRow[0].children[col].style.backgroundColor == "white";
    }

    function is_valid_location2(board, col) {
        return board[0][col] == 0;
    }

    function get_next_open_row(col) {
        for (let r = rowCount - 1; r >= 0; --r) {
            if (tableRow[r].children[col].style.backgroundColor == "white") {
                return r;
            }
        }
    }

    function get_next_open_row2(board, col) {
        for (let r = rowCount - 1; r >= 0; --r) {
            if (board[r][col] == 0) {
                return r;
            }
        }
    }

    function pick_best_move() {
        let valid_locations = get_valid_locations();
        let best_score = -10000;
        let best_col = Math.floor(Math.random() * valid_locations.length);
        for (let col in valid_locations) {
            console.log("valid location: ", valid_locations[col])
            let row = get_next_open_row(valid_locations[col]);
            let temp_board = create_temp_board();
            console.log("Temp board now: ", temp_board)
            drop_piece(temp_board, row, valid_locations[col]);
            console.log("Temp board now after: ", temp_board)
            let score = score_position(temp_board)
            if (score > best_score) {
                best_score = score;
                best_col = valid_locations[col];
            }
        }
        return best_col;
    }

    function create_temp_board() {
        let temp_board = [];
        for (let i = 0; i < rowCount; ++i) {

            temp_board[i] = new Array();

            for (let j = 0; j < colCount; ++j) {
                console.log(tableRow[i].children[j].style.backgroundColor === "white")
                if (tableRow[i].children[j].style.backgroundColor === "white") {
                    //console.log(i, j, tableRow[i].children[j].style.backgroundColor)
                    temp_board[i][j] = 0;
                } else if (tableRow[i].children[j].style.backgroundColor === "red") {
                    //console.log(i, j, tableRow[i].children[j].style.backgroundColor)
                    temp_board[i][j] = 1;
                } else {
                    //console.log(i, j, tableRow[i].children[j].style.backgroundColor)
                    temp_board[i][j] = 2;
                }
            }
        }
        //console.log("board temp ne: ", temp_board)
        return temp_board;
    }

    function drop_piece(temp_board, row, col) {
        temp_board[row][col] = 2;
    }

    function drop_piece2(temp_board, row, col, player) {
        if (player == player1) {
            temp_board[row][col] = 1;
        } else {
            temp_board[row][col] = 2;
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


    function colorMatchCheck(one, two, three, four) {
        return (one == two && one == three && one == four && one !== 'white');

    }


    function horizontalCheck() {
        //let currentRow = clickedCell.parentElement.rowIndex;
        for (let row = 0; row < tableRow.length; row++) {
            for (let col = 0; col < 4; col++) {
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
        for (let col = 0; col < colCount; ++col) {
            for (let row = 0; row < 3; row++) {
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
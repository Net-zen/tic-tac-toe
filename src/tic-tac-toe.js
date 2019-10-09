class TicTacToe {
    constructor() {
        this._player1 = {
            symbol: 'x'
        };
        this._player2 = {
            symbol: 'o'
        };
        this._currentPlayer = this._player1;
        this.matrix = [];
        for (let i = 0; i < 3; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < 3; j++) {
                this.matrix[i][j] = null;
            }            
        }
    }

    getCurrentPlayerSymbol() {
        return this._currentPlayer.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this._currentPlayer.symbol;
            this._currentPlayer = (this._currentPlayer === this._player1) ? this._player2 : this._player1;
        }
    }

    isFinished() {
        return (this.isDraw() || (this.getWinner() !== null)) ? true : false;
    }

    getWinner() {
        let players = ['x', 'o'];
        let winner = null;
        players.forEach(player => {
            for (let i = 0; i < 3; i++) {
                let col = true, row = true, diag1 = true, diag2 = true;
                for (let j = 0; j < 3; j++) {
                    col = (col && (this.matrix[i][j] === player)) ? true : false;
                    row = (row && (this.matrix[j][i] === player)) ? true : false; 
                    diag1 = (diag1 && (this.matrix[j][j] === player)) ? true : false;
                    diag2 = (diag2 && (this.matrix[2-j][j] === player)) ? true : false;
                }
                winner = (col || row || diag1 || diag2) ? player : winner; 
            }
        });
        return winner;
    }

    noMoreTurns() {
        let emptyFields = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                emptyFields = (emptyFields && (this.matrix[i][j] !== null)) ? true : false;
            }            
        }
        return emptyFields;
    }

    isDraw() {
        return (this.noMoreTurns() && (this.getWinner() === null)) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

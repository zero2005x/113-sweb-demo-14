// // Tic Tac Toe Game Logic
// document.addEventListener('DOMContentLoaded', () => {
//     const board = document.querySelector('.board');
//     const cells = document.querySelectorAll('.board li');
//     const resetButton = document.querySelector('.reset');
//     const title = document.querySelector('.tictactoe-title');

//     let currentPlayer = 'X';
//     let gameActive = true;
//     let gameState = ['', '', '', '', '', '', '', '', ''];

//     // Winning combinations
//     const winningConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     // Cell click handler
//     const handleCellClick = (event) => {
//         const clickedCell = event.target;
//         const clickedCellIndex = Array.from(cells).indexOf(clickedCell);

//         // Check if cell is already played or game is not active
//         if (gameState[clickedCellIndex] !== '' || !gameActive) return;

//         // Update cell and game state
//         gameState[clickedCellIndex] = currentPlayer;
//         clickedCell.textContent = currentPlayer;
//         clickedCell.classList.add(currentPlayer);

//         // Check for win or draw
//         checkGameResult();
//     };

//     // Check game result
//     const checkGameResult = () => {
//         let roundWon = false;

//         for (let i = 0; i < winningConditions.length; i++) {
//             const [a, b, c] = winningConditions[i];
//             if (
//                 gameState[a] && 
//                 gameState[a] === gameState[b] && 
//                 gameState[a] === gameState[c]
//             ) {
//                 roundWon = true;
//                 break;
//             }
//         }

//         if (roundWon) {
//             title.textContent = `Player ${currentPlayer} Wins!`;
//             gameActive = false;
//             return;
//         }

//         // Check for draw
//         if (!gameState.includes('')) {
//             title.textContent = "It's a Draw!";
//             gameActive = false;
//             return;
//         }

//         // Switch player
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         title.textContent = `Tic Tac Toe - Player ${currentPlayer}'s Turn`;
//     };

//     // Reset game handler
//     const handleRestartGame = () => {
//         currentPlayer = 'X';
//         gameActive = true;
//         gameState = ['', '', '', '', '', '', '', '', ''];
//         title.textContent = 'Tic Tac Toe';

//         cells.forEach(cell => {
//             cell.textContent = '';
//             cell.classList.remove('X', 'O');
//         });
//     };

//     // Add event listeners
//     cells.forEach(cell => cell.addEventListener('click', handleCellClick));
//     resetButton.addEventListener('click', handleRestartGame);

//     // Initial title setup
//     title.textContent = `Tic Tac Toe - Player ${currentPlayer}'s Turn`;
// });
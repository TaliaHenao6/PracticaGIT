// Obtener elementos del DOM
const playerXNameInput = document.getElementById('playerXName'); // Obtiene el elemento de entrada de texto para el jugador X
const playerONameInput = document.getElementById('playerOName'); // Obtiene el elemento de entrada de texto para el jugador O
const cells = document.querySelectorAll('.cell'); // Obtiene todas las celdas del tablero
const restartButton = document.getElementById('restartButton'); // Obtiene el botón de reinicio

// Variables de estado del juego
let currentPlayer = 'X'; // Variable para mantener el jugador actual ('X' o 'O')
let playerX = ''; // Variable para almacenar el nombre del jugador X
let playerO = ''; // Variable para almacenar el nombre del jugador O
let gameEnded = false; // Variable para indicar si el juego ha finalizado o no

// Función para reiniciar el juego
function restartGame() {
    playerX = playerXNameInput.value || 'Jugador X'; // Obtiene el valor del nombre del jugador X o establece un valor predeterminado
    playerO = playerONameInput.value || 'Jugador O'; // Obtiene el valor del nombre del jugador O o establece un valor predeterminado
    currentPlayer = 'X'; // Establece el jugador actual como 'X'
    gameEnded = false; // Restablece la variable de finalización del juego
    cells.forEach(cell => { // Recorre todas las celdas del tablero
      cell.innerText = ''; // Vacía el contenido de la celda
      playerXNameInput.value = ''; 
      playerONameInput.value = ''; 
      cell.classList.remove('X', 'O', 'winner'); // Remueve las clases CSS asociadas con los jugadores y el ganador de cada celda
      cell.addEventListener('click', makeMove); // Agrega el evento de clic para hacer un movimiento en la celda
    });
  }

// Función para realizar un movimiento
function makeMove(event) {
    const cell = event.target; // Obtiene la celda en la que se hizo clic
    if (cell.innerText === '' && !gameEnded) { // Verifica si la celda está vacía y el juego no ha finalizado
      cell.innerText = currentPlayer; // Establece el contenido de la celda como el símbolo del jugador actual
      cell.classList.add(currentPlayer); // Agrega una clase CSS al elemento de la celda para estilizar el símbolo del jugador actual
  
      if (checkWin(currentPlayer)) { // Verifica si hay un ganador
        endGame(currentPlayer); // Finaliza el juego con el jugador actual como ganador
      } else if (checkTie()) { // Verifica si hay un empate
        endGame('tie'); // Finaliza el juego con un empate
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Cambia al siguiente jugador
      }
    }
  }

// Función para verificar si hay un ganador
function checkWin(player) {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
      [0, 4, 8], [2, 4, 6] // Diagonales
    ];
  
    return winningCombinations.some(combination => {
      return combination.every(index => cells[index].innerText === player); // Verifica si alguna combinación ganadora coincide con los símbolos del jugador en las celdas correspondientes
    });
  }
  
  // Función para verificar si hay un empate
  function checkTie() {
    return [...cells].every(cell => cell.innerText !== ''); // Verifica si todas las celdas están llenas (no hay más movimientos posibles)
  }
  
  // Función para finalizar el juego
  function endGame(result) {
    gameEnded = true; // Establece la variable de finalización del juego
    cells.forEach(cell => cell.removeEventListener('click', makeMove)); // Elimina el evento de clic de las celdas para evitar movimientos adicionales
  
    if (result === 'tie') { // Si hay un empate
      alert('¡Empate!'); // Muestra un mensaje de alerta indicando un empate
    } else {
      const winner = result === 'X' ? playerXNameInput.value : playerONameInput.value; // Obtiene el nombre del jugador ganador
      alert(`¡${winner} ha ganado!`); // Muestra un mensaje de alerta con el nombre del jugador ganador
    }
  
    cells.forEach(cell => cell.classList.add('winner')); // Agrega una clase CSS a todas las celdas para resaltar el resultado del juego
  }
  
  // Asignar evento de clic al botón de reinicio
  restartButton.addEventListener('click', restartGame); // Agrega el evento de clic para reiniciar el juego
  
  // Reiniciar el juego al cargar la página
  restartGame(); // Llama a la función de reinicio del juego
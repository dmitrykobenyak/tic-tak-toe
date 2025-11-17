import { useState } from 'react'
import './App.css'

type Player = 'X' | 'O' | null

interface GameState {
  board: Player[]
  currentPlayer: Player
  winner: Player | 'Draw' | null
  gameOver: boolean
}

function App() {
  const [gameState, setGameState] = useState<GameState>({
    board: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    gameOver: false,
  })

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const checkWinner = (board: Player[]): Player | 'Draw' | null => {
    // Check for winner
    for (const combo of winningCombinations) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }

    // Check for draw
    if (board.every((cell) => cell !== null)) {
      return 'Draw'
    }

    return null
  }

  const handleCellClick = (index: number) => {
    if (gameState.board[index] || gameState.gameOver) {
      return
    }

    const newBoard = [...gameState.board]
    newBoard[index] = gameState.currentPlayer

    const winner = checkWinner(newBoard)
    const gameOver = winner !== null

    setGameState({
      board: newBoard,
      currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
      winner,
      gameOver,
    })
  }

  const resetGame = () => {
    setGameState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
      gameOver: false,
    })
  }

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <div className="game-info">
        {gameState.gameOver ? (
          <p className="status">
            {gameState.winner === 'Draw'
              ? "It's a Draw!"
              : `Winner: ${gameState.winner}!`}
          </p>
        ) : (
          <p className="status">Current Player: {gameState.currentPlayer}</p>
        )}
      </div>
      <div className="board">
        {gameState.board.map((cell, index) => (
          <button
            key={index}
            className={`cell ${cell ? 'filled' : ''}`}
            onClick={() => handleCellClick(index)}
            disabled={gameState.gameOver}
          >
            {cell}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  )
}

export default App

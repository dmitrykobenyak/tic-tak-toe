# Tic-Tac-Toe

A simple and elegant tic-tac-toe game built with React and TypeScript.

## Features

- Clean and modern UI
- Two-player gameplay (X and O)
- Winner detection
- Draw detection
- Reset game functionality
- Responsive design

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dmitrykobenyak/tic-tak-toe.git
cd tic-tak-toe
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

Build for production:
```bash
npm run build
```

### Linting and Formatting

Run ESLint:
```bash
npm run lint
```

Format code with Prettier:
```bash
npm run format
```

## How to Play

1. The game starts with player X
2. Click on any empty cell to place your mark
3. Players alternate turns
4. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
5. If all cells are filled and no player has won, the game is a draw
6. Click "Reset Game" to start a new game

## Project Structure

```
tic-tak-toe/
├── src/
│   ├── App.tsx          # Main game component
│   ├── App.css          # Game styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## License

MIT

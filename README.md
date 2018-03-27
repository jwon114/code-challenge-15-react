# 15 Puzzle Challenge

## Objective

Create a tile puzzle game divided into even tiles with one missing. These tiles should then be randomised so that user interaction is required to resolve the original frame. Tiles may only be moved into the empty position.

## My Approach

- Use a multi dimensional array to map the puzzle board depending on the number of squares.
- Create an array with the number of the squares - 1, shuffled, then distributed into the multi dimensional array.
- A copy of the completed array is also stored in state.
- Each square is an instance of the Square component, a stateless component with a click event.
- A click event checks its adajacent square if there is a valid move, if there is then move value into that square.
- The puzzle is checked for completion on every valid click by comparing the current state of the board with the completed array in state.

## Technology Used

- React (Webpack3 starter boilerplate https://github.com/epoch/webpack3-react-starter)
- ES6
- SASS
- Mocha (testing framework), Chai (assertion library), Enzyme (testing utilities for React)

## Based On

https://en.wikipedia.org/wiki/15_puzzle

## Usage

1. Install dependencies
```
npm install
```

2. Start Web Dev Server
```
npm start
```

3. Run tests for puzzle completion and valid moves
```
npm test
```

## Future Enhancements

- Split the puzzle board into slices of an image for a visual enhancement.
- Slide animation when a tile is clicked and able to move into the empty position.
- Game setting to change the board size (number of squares), with validation as the board must have equal number of height and width squares.
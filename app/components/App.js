import React from 'react'
import Square from './Square/Square'
import _ from 'lodash'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfSquares: 16,
      squareArray: [],
      desiredOutput: []
    }
    this.handleSquareClick = this.handleSquareClick.bind(this)
  }

  componentDidMount() {
    const { numberOfSquares } = this.state
    // set constants for the puzzle board
    const maxSize = Math.sqrt(numberOfSquares) - 1
    let initSquares = []
    // create a array of numbers starting from 1 to the number of squares
    let numberRange = _.range(1, numberOfSquares + 1)
    // create desired output array
    let desiredOutput = numberRange
    desiredOutput[numberOfSquares - 1] = ''
    // loop through shuffled array of numbers and build 2D array
    numberRange = _.shuffle(numberRange)
    for (let y = 0; y <= maxSize; y++) {
      let column = []
      for (let x = 0; x <= maxSize; x++) {
        // replace the final number with an empty string
        if (numberRange[0] === numberOfSquares) {
          column.push('')
          numberRange.shift()
        } else {
          column.push(numberRange.splice(0, 1)[0])
        }
      }
      initSquares.push(column)
    }
    this.setState({ 
      squareArray: initSquares,
      desiredOutput
    })
  }

  handleSquareClick(y, x) {
    const { squareArray } = this.state
    // check for adjacent space to move into
    let move = this.validMove(y, x)
    if (move.valid) {
      let newSquareArray = squareArray
      // update the squares and render the new array
      newSquareArray[move.y][move.x] = squareArray[y][x]
      newSquareArray[y][x] = ''
      this.setState({ squareArray: newSquareArray })
      if (this.checkComplete()) {
        console.log('finished!')
      }
    }
  }

  validMove(y, x) {
    const { squareArray, numberOfSquares } = this.state
    const maxSize = Math.sqrt(numberOfSquares)
    let valid = true

    // check row direction and column direction of square
    if (y + 1 < maxSize && squareArray[y + 1][x] === '') {
      // down row
      return { valid, y: y + 1, x }
    } else if (y - 1 >= 0 && squareArray[y - 1][x] === '') {
      // up row
      return { valid, y: y - 1, x }
    } else if (x - 1 >= 0 && squareArray[y][x - 1] === '') {
      // left column
      return { valid, y, x: x - 1 }
    } else if (x + 1 < maxSize && squareArray[y][x + 1] === '') {
      // right column
      return { valid, y, x: x + 1 }
    } else {
      return { valid: !valid, y, x }
    }
  }

  checkComplete() {
    // check if the arrays match
    const { squareArray, desiredOutput } = this.state
    return _.isEqual(_.flattenDeep(squareArray), desiredOutput)
  }

  render() {
    const { squareArray } = this.state
    return (
      <div className='puzzle_container'>
        {squareArray.map((row, rowIndex) => (
          row.map((value, columnIndex) => (
            <Square 
              key={value}
              y={rowIndex}
              x={columnIndex}
              value={value}
              clicked={this.handleSquareClick}
            />
          ))
        ))}
      </div>
    )
  }
}

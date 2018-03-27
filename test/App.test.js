import React from 'react'
import { expect } from 'chai'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import App from '../app/components/App'

configure({ adapter: new Adapter() });

describe('Test App', () => {

  it('Check if the puzzle has been completed', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().setState({
      squareArray: [[1,2,3],[4,5,6],[7,8,'']],
      desiredOutput: [1,2,3,4,5,6,7,8,'']
    })
    
    expect(wrapper.instance().checkComplete()).equal(true)
  })

  it('Valid Adjacent Move Right', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().setState({
      squareArray: [[1,2,3],[4,'',5],[6,7,8]],
      numberOfSquares: 9
    })

    expect(wrapper.instance().validMove(1,0).valid).equal(true)
  })

  it('Valid Adjacent Move Left', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().setState({
      squareArray: [[1,2,3],[4,'',5],[6,7,8]],
      numberOfSquares: 9
    })

    expect(wrapper.instance().validMove(1,2).valid).equal(true)
  })

  it('Valid Adjacent Move Up', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().setState({
      squareArray: [[1,2,3],[4,'',5],[6,7,8]],
      numberOfSquares: 9
    })

    expect(wrapper.instance().validMove(2,1).valid).equal(true)
  })

  it('Valid Adjacent Move Down', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().setState({
      squareArray: [[1,2,3],[4,'',5],[6,7,8]],
      numberOfSquares: 9
    })

    expect(wrapper.instance().validMove(0,1).valid).equal(true)
  })
})
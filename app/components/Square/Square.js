import React, { Component } from 'react'
import './Square.scss'

export default function Square(props) {

  const { clicked, y, x, value } = props
  return (
    <div className='square' onClick={() => clicked(y, x)}>
      {value}
    </div>
  )
}

import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  // 🐨 create a div (💯 document.createElement)
  const div = document.createElement('div')
  // 🐨 render the FavoriteNumber component to that div with ReactDOM.render
  ReactDOM.render(<FavoriteNumber />, div)
  // 🐨 assert the input type attribute is a number
  expect(div.querySelector('input').type).toBe('number')
  //:🐨 assert the label's text content is "Favorite Number"
  expect(div.querySelector('label').textContent).toBe('Favorite Number')
})

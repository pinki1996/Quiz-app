import React from 'react'
import { myBasket } from '../App.js'

function Result() {

    const {myScore} = React.useContext(myBasket)
  return (
    <div>
        <h2>Your Score out of 4 Question is {myScore} </h2>
    </div>
  )
}

export default Result
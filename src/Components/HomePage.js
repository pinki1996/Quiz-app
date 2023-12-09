import React from 'react'
import { myBasket } from '../App.js'

function HomePage() {

    const {mySetPage} = React.useContext(myBasket)

    function GoToQuestion()
    {
        //Logic to navigate to question component
        mySetPage("question")
    }
  return (
    <div>
        <button onClick={GoToQuestion} style={{margin:40}} className='btn btn-outline-success'>Start Quiz</button>
    </div>
  )
}

export default HomePage
import React from 'react'
import { myBasket } from '../App.js'

const quizData = [
    {
        title:"What is 10 + 30",
        A:100,
        B:50,
        C:40,
        D:60,
        Answer:"C"
    },
    {
        title:"What is use of UseState in React",
        A:"Store the data",
        B:"Create the data",
        C:"Both A and B",
        D:"None of the above",
        Answer:"A"
    },
    {
        title:"What does + stands for",
        A:"Addition",
        B:"Substraction",
        C:"Multiplication",
        D:"Divide",
        Answer:"A"
    },
    {
        title:"What use of react",
        A:"to develop UI",
        B:"to destroy UI",
        C:"Both A and B",
        D:"None of the above",
        Answer:"A"
    }
]

function Question() {

    const {mySetPage, myScore, mySetScore}= React.useContext(myBasket)

    const [currentQuestion, setCurrentQuestion]= React.useState(0)

    const [optionChoosen, setOptionChoosen] = React.useState("")

    

    function nextBtn()
    {

        //Logic to varify the answer
        if(optionChoosen === quizData[currentQuestion].Answer)
        {
            //if the above condition is true, it means the answer is correct . Increase the score by 1
            mySetScore(myScore+ 1)
        }

        //Logic to increase the value present in current question variables by +1

            setCurrentQuestion(currentQuestion + 1  )
    }
    function submitBtn()
    {
        //Logic to verify the last answer
        if(optionChoosen === quizData[currentQuestion].Answer)
        {
            //if the above condition is true, it means the answer is correct . Increase the score by 1
            mySetScore(myScore + 1)
        }

        //Logic to call the result component
        mySetPage("result")
    }

  return (
    <div style={{margin:50}}>
        
            <h2>Q: { quizData[currentQuestion].title }</h2>

            A: <button className='btn btn-outline-dark' onClick={function()
            {
                setOptionChoosen("A")
            }}>{ quizData[currentQuestion].A }</button><br/><br/>
            B: <button className='btn btn-outline-dark' onClick={function()
            {
                setOptionChoosen("B")
            }}>{ quizData[currentQuestion].B }</button><br/><br/>
            C: <button className='btn btn-outline-dark'onClick={function()
            {
                setOptionChoosen("C")
            }}>{ quizData[currentQuestion].C }</button><br/><br/>
            D: <button className='btn btn-outline-dark' onClick={function()
            {
                setOptionChoosen("D")
            }}>{ quizData[currentQuestion].D }</button><br/><br/>

            {
                currentQuestion === quizData.length - 1 ? <button className='btn btn-danger' onClick={submitBtn}>Submit</button> 
                :  <button className='btn btn-primary' onClick={nextBtn}>Next</button>
            }

           
        
    </div>
  )
}

export default Question
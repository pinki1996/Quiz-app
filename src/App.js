import React from "react";
import HomePage from "./Components/HomePage";
import Question from "./Components/Question";
import Result from "./Components/Result";

export const myBasket = React.createContext()


function App() 
{
  const[page, setPage] = React.useState("homepage")

  const [score, setScore] = React.useState(0)
 

  return (

    <div>
       <myBasket.Provider value={ {mySetPage:setPage, myScore:score, mySetScore:setScore} }>
          { page == "homepage" && <HomePage/>}
          { page == "question" && <Question/>} 
          { page == "result" && <Result/>} 
      </myBasket.Provider >
      
        
      
    </div>
  );
}

export default App;

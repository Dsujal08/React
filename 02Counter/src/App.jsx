import { useState } from 'react'
import './App.css'

function App() {
// let Counter = 10

 const [Counter, setCounter] = useState(10)

  const addvalue = ()=>
  {
    if (Counter == 20){
      setCounter(Counter = 20)
    }
    else{
      setCounter(Counter+1)
    }
    
  }

  const removevalue = ()=> 
  {
    if (Counter - 0){
      setCounter(Counter - 1)
    }
    else{
      setCounter(Counter = 0)
    }
  }
  return (
    <>
      <h1>Coffeeee Aur Reacttt</h1>
      <h2>Counter Value: {Counter} </h2>


      <button
      onClick={addvalue}
      
      >Add Value  </button>
      <button
      onClick={removevalue}
      >Remove Value  </button>
  
    </>
  )
}

export default App

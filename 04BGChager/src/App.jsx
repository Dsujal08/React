import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400  text-black p-4 rounded-lg mb-4'>SUJAL DAVE </h1>

     
      <Card usrename="Sujal" btntext="GOOOO"/>
      <Card usrename="Dave"/>
    
    </>
  )
}

export default App

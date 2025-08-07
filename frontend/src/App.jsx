import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cardContainer'>
        <Card />

      </div>


    </>
  )
}

export default App

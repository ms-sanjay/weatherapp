import { useState } from 'react'
import './App.css'
import Card from './Card.jsx';
import WindIntro from './WindIntro.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WindIntro />
      <Card />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Netflix from './Components/Netflix'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Netflix/>
    </>
  )
}

export default App

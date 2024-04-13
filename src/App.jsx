import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Components/Container/Container'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 className='header'> 1acre</h2>
      <Container/>
    </>
  )
}

export default App

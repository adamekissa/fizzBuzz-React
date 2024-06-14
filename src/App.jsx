import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <p> message is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Next
        </button>
        <button onClick={() => setCount((count) => count = 0)}>reset</button>
      </div>
    </>
  )
}

export default App

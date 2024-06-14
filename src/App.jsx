import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [message, setMessage] = useState(0)

  function reset(){
    setCount(count = 0);
    setMessage(0)
  }
function next(){

  if (count % 15 === 0) {
    setMessage(message = "FizzBuzz" );
  } else if (count % 5 === 0) {
    setMessage(message = "Buzz" );
  } else if (count % 3 === 0) {
    setMessage(message = "Fizz" );
  } else {
    setMessage(message = count);
  }
  setCount( count + 1)
  }

  return (
    <>
      <div className="card">
        <p>{message}</p>
        <button onClick={next}>
          Next
        </button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default App



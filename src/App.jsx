import { useState } from 'react'
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
    setMessage("FizzBuzz" );
  } else if (count % 5 === 0) {
    setMessage("Buzz" );
  } else if (count % 3 === 0) {
    setMessage("Fizz" );
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



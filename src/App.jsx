import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const message = getUtterance(count);

  function reset(){
    setCount(1);
  }
  function getUtterance(count){
    if (count % 15 === 0) {
      return "FizzBuzz";
    } else if (count % 5 === 0) {
      return "Buzz";
    } else if (count % 3 === 0) {
      return "Fizz";
    } else {
      return count;
    }
  }
function next(){
  setCount( count + 1)
  }

  return (
    <>
    <h3>Mohammed's FizzBuzz App</h3>
      <div className="card">
        <p style={{backgroundColor: 'yellow', borderRadius:10, fontSize: 40}}>{message}</p>
        <button onClick={next}>
          Next
        </button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  )
}

export default App



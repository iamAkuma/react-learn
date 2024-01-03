import React, { useState } from 'react'

const TogetherCounter = () => {
    const [count, setCount] = useState(0)

    function handlesClick(){
        setCount(count + 1)
    }
    function handleReset(){
        setCount(count === 0)
      }
  return (
    <>
    <div>
      <h2>
        Updates Together
      </h2>
      <button count={count} onClick={handlesClick}>
        Clicked {count} times
      </button>
      <br></br>
      <button count={count} onClick={handlesClick}>
        Clicked {count} times
      </button>
      <br></br>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
    </>
  )
}

export default TogetherCounter

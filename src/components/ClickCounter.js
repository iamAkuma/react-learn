import React, { useState } from 'react'

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function handleReset(){
      setCount(count === 0)
    }
  return (
    <>
    <div>
      <button onClick={handleClick}>
        Clicked {count === 0 ? '0' : count} times
      </button>
    </div>
    <div>
      <button onClick={handleReset}>
        Reset
      </button>
    </div>
    </>


  )
}

export default ClickCounter

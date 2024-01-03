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
    <div>
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
      <div>
        <button onClick={handleReset}>
          Reset Count
        </button>
      </div>
    </div>

  )
}

export default ClickCounter

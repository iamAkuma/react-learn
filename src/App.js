import React from 'react'
import Button from './components/Button'
import ClickCounter from './components/ClickCounter'
import TogetherCounter from './components/TogetherCounter'

const App = () => {
  return (
    <>
      <div>
      <h1>
        BUTTON CLICK COUNTER
      </h1>
        <h2>Updates Separately</h2>
        <ClickCounter />
        <ClickCounter />
        <TogetherCounter />
      </div>
    </>
  )
}

export default App

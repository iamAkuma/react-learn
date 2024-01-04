import React from 'react'

const TicTacToe = ({value}) => {
  return (
    <>
     <div className="board-row">
        <button className="square">{value}</button>
        <button className="square">{value}</button>
        <button className="square">{value}</button>
      </div>
      <div className="board-row">
        <button className="square">{value}</button>
        <button className="square">{value}</button>
        <button className="square">{value}</button>
      </div>
      <div className="board-row">
        <button className="square">{value}</button>
        <button className="square">{value}</button>
        <button className="square">{value}</button>
      </div>
    </>
  )
}

export default TicTacToe

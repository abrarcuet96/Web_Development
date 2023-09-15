import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'
function App() {
  function handleClick(){
    alert('button clicked');
  }
  const handleClickAgain=()=>{
    alert('button clicked again');
  }
  const addToFive=(num)=>{
    alert(num+5);
  }
  return (
    <>
      <h1>React Core Concept 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClickAgain}>Click Again</button>
      <button onClick={()=>{alert('button clicked again and again')}}>Click again and again</button>
      {/* <button onClick={addToFive}>Click add to five</button> */}
      <button onClick={()=>addToFive(5)}>Click add to five</button>
    </>
  )
}
export default App
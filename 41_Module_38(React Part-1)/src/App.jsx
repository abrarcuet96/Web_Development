import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './toDo'
import Actor from './actor'
import Cricketer from './cricketer'
import BookStore from './book_store'

function App() {
  const actors=['sakib','raj','sharif','rubel'];
  const cricketers=[
    {name:'sakib', age:21},
    {name:'mash', age:22},
    {name:'mehedy', age:12},
    {name:'taskin', age:42},
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {
        cricketers.map(cricketer=><Cricketer cricketer={cricketer}></Cricketer>)
      }
      <Actor name={"bappa raz"}></Actor>
      {
        actors.map(actor=><Actor name={actor}></Actor>)
      }
      {/* <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Explore React" isDone={false}></ToDo> */}
      {/* <Device name="Laptop" price="55k"></Device>
      <Device name="Mobile" price="17k"></Device>
      <Person></Person>
      <Student grade="7" score="23"></Student>
      <Student grade="8" score="24"></Student>
      <Student grade="9" score="25"></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props) {
  return <h2>This Device: {props.name} price: {props.price}</h2>
}
const { grade, score } = { grade: '7', score: '23' }
function Student({ grade, score }) {
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}
function Person() {
  const age = 25;
  const person = { name: 'abrar', age: 12 }
  return <h3>I am {person.name} a person with age: {age}</h3>
}
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h3>Devo Devo</h3>
      <p>Coding:</p>
    </div>
  )
}
export default App

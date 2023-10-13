import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <div className="container-fluid bg-dark mb-3">
        <h1 className='text-light text-center'>Assignment For Job</h1>
        <hr />
        <h3 className='text-light text-center'>Lalit Sharma</h3>
    
   <div className="first text-center">
   <h4 className='text-light text-center'>First Assighment</h4>
    <Link className='text-danger p-2 mt-2  text-center' to="/tudoapp">TUDOAPP</Link>
    <h4 className='text-light text-center'>Second Assighment</h4>
    <Link className='text-danger p-2 mt-2 mb-3  text-center' to="/tictactoe">TicTacToe Game</Link>
   </div>
   </div>
    </>
  )
}

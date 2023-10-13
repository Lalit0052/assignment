import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './home'
import Tudoapp from './Tudoapp'
import Tictac from './tictactoe/tictac'

export default function App() {
  return (
	<>
	<BrowserRouter>
	<Routes>
		<Route path='/' element={<Home/>}/>
		<Route path="/tudoapp" element={<Tudoapp/>}/>
		<Route path="/tictactoe" element={<Tictac/>}/>
	</Routes>
	</BrowserRouter>
	</>
  )
}







import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Movies from './Components/Movies'
import WatchList from './Components/WatchList'
import Banner from './Components/Banner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<><Banner /><Movies /></>} />
          <Route path='/watchlist' element={<WatchList />} />


        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App

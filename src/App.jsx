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
  // it is empty array initially. After user clicks on emoji that should be stored in the array
  let [watchlist, setwatchList] = useState([])

  let handleAddtoWatchList = (movieObj) => {
    // Here ...watchList represents the previous one and  we are adding
    // new movie to
    let newwatchList = [...watchlist, movie]
    setwatchList(newwatchList)
    console.log(newwatchList)

  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<><Banner /><Movies handleAddtoWatchList={handleAddtoWatchList} /></>} />
          <Route path='/watchlist' element={<WatchList />} />


        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App

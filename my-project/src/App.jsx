import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { fromJSON } from 'postcss'
import { Outlet } from 'react-router-dom'

// acts as a layout
const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
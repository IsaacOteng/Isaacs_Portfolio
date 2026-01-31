import React from 'react'
import Homepage from './components/Homepage'
import ReadArticles from './components/ReadArticles'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/articles' element={<ReadArticles/>} /> 
      </Routes>
    </>
  )
}

export default App
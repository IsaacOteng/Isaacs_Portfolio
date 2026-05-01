import React from 'react'
import Homepage from './components/Homepage'
import ReadArticles from './components/ReadArticles'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/articles' element={<ReadArticles/>} />
      </Routes>
    </ThemeProvider>
  )
}

export default App

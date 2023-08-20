import React from 'react'
import Home from './components/Home'
import Modal from './components/Modal'
import { Route, Routes } from 'react-router-dom'
import { NewsContext } from './context/NewsContext'

const App = () => {
  return (
    <NewsContext>
    <div className="w-full bg-gray-950 min-h-screen pt-6">
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/:id" element={<Modal />} />
      </Route>
    </Routes>
  </div>
  </NewsContext>
  )
}

export default App
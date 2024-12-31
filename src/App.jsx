import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import './App.css'

import HomePage from './pages/HomePage'
import MagazinePage from './pages/MagazinePage'
import AboutPage from './pages/AboutPage'
import CVPage from './pages/CVPage'
import MoodboardPage from './pages/MoodboardPage'

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Skeleton variant="rectangular" height="100vh" width="100%" />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/galeria" element={<MagazinePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/moodboard" element={<MoodboardPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App

import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage'))
const MagazinePage = lazy(() => import('./pages/MagazinePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const CVPage = lazy(() => import('./pages/CVPage'))
const MoodboardPage = lazy(() => import('./pages/MoodboardPage'))

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

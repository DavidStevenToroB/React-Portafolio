import { Routes, Route } from 'react-router-dom'
import { Experiences } from './src/Pages/Experiences/Experiences'
import { NotFound } from './src/Pages/NotFound/NotFound'
import { Skills } from './src/Pages/Skills/Skills.jsx'
import { Header } from './src/layouts/Header/Header.jsx'
import { Footer } from './src/layouts/Footer/Footer.jsx'
import { Home } from './src/Pages/Home/Home'
import React from 'react'



export const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  )
}


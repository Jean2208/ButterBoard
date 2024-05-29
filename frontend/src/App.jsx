import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landing-page/LandingPage'
import './App.css'
import reactLogo from "./assets/react.svg";
import * as React from "react";

function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LandingPage/>}/>
              </Routes>
          </BrowserRouter>

      </>
  )
}

export default App

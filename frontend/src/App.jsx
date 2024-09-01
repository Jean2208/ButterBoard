import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './landing-page/LandingPage'
import './App.css'
import * as React from "react";
import TodoApp from "./landing-page/components/TodoApp.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage/>}/>
                    <Route path='/todos' element={<TodoApp/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
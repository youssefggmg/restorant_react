import React ,{useState, useEffect} from 'react'
import Navbare from './NavBar.jsx';
import Hero from './Hero.jsx';
import Mainpage from './Mainpage.jsx';
import Notfound from './Notfound.jsx';
import { BrowserRouter , Route, Routes } from "react-router-dom"
import axios from 'axios';

const App = () => {
    return (
        <>  
        <Navbare/>
        <BrowserRouter>
        <Routes>
            <Route index path='/' element={<div>
                <Hero/><Mainpage/>
            </div>}/>
            <Route path='*' element={<Notfound/>}/> 
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App

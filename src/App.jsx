import React ,{useState, useEffect} from 'react'
import Navbare from './NavBar.jsx';
import Hero from './Hero.jsx';
import Mainpage from './Mainpage.jsx';
import Notfound from './Notfound.jsx';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import  Footer from "./Footer.jsx";
import About from "./About.jsx"
import Addmeal from './Addmeal.jsx';
import "./style/globale.css"

const App = () => {
    return (
        <>  
        <Navbare/>
        <BrowserRouter>
        <Routes>
            <Route index path='/' element={<div style={{display:"flex", flexDirection:"column"}}>
                <Hero/><Mainpage/>
            </div>}/>
            <Route path='*' element={<Notfound/>}/> 
            <Route path='/about' element={<div> <Hero/> <About/> </div>} />
            <Route path='/addmeal' element={<div> <Addmeal/> </div>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
}

export default App

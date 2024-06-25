import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbare from './NavBar.jsx';
import Hero from './Hero.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbare/>
    <Hero/>
  </React.StrictMode>,
)

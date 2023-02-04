import React from 'react';
import './app.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component//Home/Home';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
import { Router } from './component/Router';

function App() {
  return (
    <div>
      <Navbar/>
      <Router/>
    </div>
  )
}

export default App;

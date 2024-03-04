import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/HomePage.js';
import About from './Components/About/About.js';

function App() {
  return (
    <>
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} exact/>
        <Route path='/about' element={<About />} exact/>
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App;

import React from 'react';
import './App.css';
import Navbar from '../src/NavBar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Flowers from './Flowers';
import Animals from './Animals';
import Api from './Api';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes className="Flowers">
        <Route exact path='/' exact element={<Flowers />} />
        <Route path='/animals' element={<Animals />} />
        <Route path='/api' element={<Api />} />
      </Routes>
    </Router>
  );
}
export default App;

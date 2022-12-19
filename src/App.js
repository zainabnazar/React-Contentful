import React from 'react';
import './App.css';
import Navbar from '../src/NavBar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';

import Flowers from './Flowers';
import Animals from './Animals';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/flowers' exact element={<Flowers />} />
        <Route path='/animals' element={<Animals />} />
      </Routes>
    </Router>
  );
}
export default App;

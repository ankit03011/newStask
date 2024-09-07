import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ServicesNewPage from './ServicesNewPage';
import HomePage from './homePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services/new" element={<ServicesNewPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

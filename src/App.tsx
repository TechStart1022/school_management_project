import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Page/Homepage';
import ChooseUser from './Page/ChooseUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/choose" element={<ChooseUser visitor="normal" />} />
      </Routes>
    </Router>
  );
}

export default App;

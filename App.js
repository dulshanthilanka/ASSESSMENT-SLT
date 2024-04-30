import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import Register from './components/Register';
import Home from './components/Home';
import Index from './components/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/index/:id" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

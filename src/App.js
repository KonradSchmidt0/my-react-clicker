// src/App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clicker from './pages/Clicker';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clicker" element={<Clicker />} />
    </Routes>
  );
}
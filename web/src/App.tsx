import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

import './styles/main.css';

function App() {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/success" element={<Navigate to="/" />}/>
      </Routes>
    </Router>
  )
  
}

export default App

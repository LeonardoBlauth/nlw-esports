import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

import './styles/main.css';

function App() {
   return (
    <Router>
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/success" element={<Navigate to="/" />}/>
      </Routes>
    </div>
    </Router>
  )
  
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import QuestionPage from './pages/QuestionPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route goes to Home */}
        <Route path="/" element={<Home />} />
        
        {/* The tasks route will handle the status filtering in the URL */}
        <Route path="/tasks" element={<QuestionPage />} />
        
        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

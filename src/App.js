import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CodeEditor from './components/CodeEditor';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 1000,
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/editor" element={<CodeEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

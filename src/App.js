import React from 'react';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="App">
            <Router>
                <Sidebar />
            
                <Routes>
                    <Route path="/" element="" />
                    <Route path="/profile" element="" />
                    <Route path="/all-task" element="" />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

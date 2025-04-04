import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/personal-details" element={<PersonalDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import KnowledgePage from './pages/KnowledgePage';
import FitnessPage from './pages/knowledge/FitnessPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/personal-details" element={<PersonalDetailsPage />} />
                <Route path="/knowledge-base" element={< KnowledgePage />} />
                <Route path="/knowledge/fitness" element={<FitnessPage />} /> // 新增路由
            </Routes>
        </Router>
    );
};

export default App;

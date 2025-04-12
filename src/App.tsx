import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import KnowledgePage from './pages/KnowledgePage';
import FitnessPage from './pages/knowledge/FitnessPage';
import KChartPage from 'pages/knowledge/KChartPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/personal-details" element={<PersonalDetailsPage />} />
                <Route path="/knowledge" element={< KnowledgePage />} />
                <Route path="/knowledge/fitness" element={<FitnessPage />} />
                <Route path="/knowledge/k_chart" element={<KChartPage />} />
            </Routes>
        </Router>
    );
};

export default App;

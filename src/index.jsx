import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OmMig from './pages/ommig.jsx';
import Projekt from './pages/projekt.jsx';
import Kontakt from './pages/kontakt.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OmMig />} />
        <Route path="/projekt" element={<Projekt />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

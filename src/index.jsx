import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projekt" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

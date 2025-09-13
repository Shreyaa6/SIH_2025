import React, { useState } from 'react';
import './styles/App.css';
import Landing from './components/Landing';
import About from './components/About';
import Prediction from './components/Prediction';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'landing' && <Landing onNavigate={navigateToPage} />}
      {currentPage === 'about' && <About onNavigate={navigateToPage} />}
      {currentPage === 'prediction' && <Prediction onNavigate={navigateToPage} />}
    </div>
  );
}

export default App;

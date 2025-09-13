import React, { useState } from 'react';
import './App.css';
import Landing from './pages/Landing';
import About from './pages/About';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'landing' && <Landing onNavigate={navigateToPage} />}
      {currentPage === 'about' && <About onNavigate={navigateToPage} />}
    </div>
  );
}

export default App;

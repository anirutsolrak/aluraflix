import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { VideosProvider } from './componentes/context/VideosContext'; // Importe o VideosProvider
import HomePage from './componentes/HomePage'; 
import NewVideoPage from './componentes/NewVideoPage'; 

function App() {
  return (
    <VideosProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-video" element={<NewVideoPage />} />
        </Routes>
      </Router>
    </VideosProvider>
  );
}

export default App;
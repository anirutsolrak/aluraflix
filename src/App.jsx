import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import HomePage from './componentes/HomePage'; 
import NewVideoPage from './componentes/NewVideoPage'; 

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${(props) => props.theme.colors.secondary}; 
    color: ${(props) => props.theme.colors.text}; 
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: 1rem 0;
  }
  p {
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  a {
    color: ${(props) => props.theme.colors.primary}; // Cor vibrante
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  .video-card {
    width: 300px;
  }
  .card-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

const theme = {
  colors: {
    primary: '#ff6347', // Cor vibrante principal
    secondary: '#f5f5f5', // Cor de fundo suave
    text: '#333', // Cor do texto principal
    highlight: '#ff4d4d', // Cor de destaque
    headerBg: '#f0f0f0', // Cor de fundo do header
    headerText: '#333', // Cor do texto do header
  },
  font: {
    family: 'Roboto', // Fonte principal
    size: {
      small: '14px',
      medium: '16px',
      large: '20px',
    },
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-video" element={<NewVideoPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
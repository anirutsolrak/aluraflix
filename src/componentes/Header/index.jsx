import React from 'react';
import {AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Importe Link do React Router

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="logo">
          ALURAFlix
        </Typography>
        <div className="header-buttons">
          <Button color="inherit" component={RouterLink} to="/">Home</Button> 
          <Button color="inherit" component={RouterLink} to="/new-video">Novo Vídeo</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header
import React from 'react';
import { Container, Typography } from '@mui/material'; // Importe os componentes individualmente

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="sm" className="footer-container">
        <Typography variant="body2" align="center" className="footer-text">
          © 2023 ALURAFlix - Todos os direitos reservados.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
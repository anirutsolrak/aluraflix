import React from 'react';
import { Container, Typography, Grid } from '@mui/material'; // Importe os componentes individualmente

const Banner = () => {
  return (
    <Container maxWidth="md" className="banner">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={12}>
          <img src="/banner.jpg" alt="Banner de Destaque" className="banner-image" /> 
          <Typography variant="h4" align="center" className="banner-text">
            Descubra o conteúdo que impulsiona sua carreira!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
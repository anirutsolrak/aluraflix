import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Container, Typography, TextField, Button, Select, MenuItem } from '@mui/material'; 

const NewVideoPage = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('frontend'); // Default categoria
  const [image, setImage] = useState(''); // Sem o prefixo '/'
  const [videoLink, setVideoLink] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para criar o novo vídeo (ex: adicionar ao estado)
    console.log('Novo Vídeo:', { title, category, image, videoLink, description });
    // Limpe os campos após o envio
    setTitle('');
    setCategory('frontend');
    setImage('');
    setVideoLink('');
    setDescription('');
  };

  const handleClear = () => {
    // Lógica para limpar o formulário
    setTitle('');
    setCategory('frontend');
    setImage('');
    setVideoLink('');
    setDescription('');
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md" className="new-video-container">
        <Typography variant="h4" align="center" className="new-video-title">
          Novo Vídeo
        </Typography>
        <form onSubmit={handleSubmit} className="new-video-form">
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Título"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="image"
            label="Imagem"
            type="text"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)} 
          />
          <TextField
            margin="dense"
            id="videoLink"
            label="Vídeo"
            type="text"
            fullWidth
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Descrição"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Select
            labelId="category-label"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="frontend">Frontend</MenuItem>
            <MenuItem value="backend">Backend</MenuItem>
            <MenuItem value="inovacao">Inovação</MenuItem>
            <MenuItem value="gestao">Gestão</MenuItem>
          </Select>
          <div className="form-actions">
            <Button onClick={handleClear} color="primary">
              Limpar
            </Button>
            <Button type="submit" color="primary">
              Criar
            </Button>
          </div>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default NewVideoPage;
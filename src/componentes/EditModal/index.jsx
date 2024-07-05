import React, { useState } from 'react';
import { Dialog,DialogTitle, DialogContent, DialogActions, TextField, Button, Select, MenuItem }from '@mui/material'; 

const EditModal = ({ video, onClose }) => {
  const [title, setTitle] = useState(video.title);
  const [category, setCategory] = useState(video.category);
  const [image, setImage] = useState(video.image); // Sem o prefixo '/'
  const [videoLink, setVideoLink] = useState(video.videoLink);
  const [description, setDescription] = useState(video.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para salvar as alterações (ex: atualizar o vídeo no estado)
    console.log('Vídeo atualizado:', { title, category, image, videoLink, description });
    onClose();
  };

  const handleClear = () => {
    // Lógica para limpar o formulário (opcional)
    setTitle('');
    setCategory('');
    setImage('');
    setVideoLink('');
    setDescription('');
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Editar Card</DialogTitle>
      <DialogContent>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClear} color="primary">
          Limpar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
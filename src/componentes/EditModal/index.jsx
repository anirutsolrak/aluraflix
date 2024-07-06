import React, { useState, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { VideosContext } from '../context/VideosContext';

const EditModal = ({ video, onClose, onUpdateVideo }) => {
  const [title, setTitle] = useState(video.title);
  const [category, setCategory] = useState(video.category);
  const [image, setImage] = useState(video.image);
  const [videoLink, setVideoLink] = useState(video.videoLink);
  const [description, setDescription] = useState(video.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Crie um novo objeto com os dados atualizados
    const updatedVideo = {
      id: video.id, // Mantenha o ID original
      title,
      category,
      image,
      videoLink,
      description
    };
    // Chame a função onUpdateVideo para atualizar o estado no HomePage
    onUpdateVideo(updatedVideo); 
    onClose();
  };

  const handleClear = () => {
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
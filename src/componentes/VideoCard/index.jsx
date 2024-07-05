import React, { useState } from 'react';
import {Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material'; 
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditModal from '../EditModal'

const VideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleDelete = () => {
    // Lógica para excluir o vídeo (ex: remover do estado)
    console.log('Excluir Vídeo:', video.title);
  };

  return (
    <Card className="video-card">
      <CardMedia
        component="img"
        alt={video.title}
        height="140"
        image={`/videos/${video.image}`} // Caminho relativo à pasta 'public/videos'
        title={video.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {video.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {video.description}
        </Typography>
      </CardContent>
      <div className="card-actions">
        <IconButton aria-label="edit" onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
      {showModal && (
        <EditModal
          video={video}
          onClose={() => setShowModal(false)}
        />
      )}
    </Card>
  );
};

export default VideoCard;
import React, { useState, useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditModal from '../EditModal'; 
import { Link } from 'react-router-dom'; 
import useApiService from '../Api/useApiService'; 

const VideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const { updateVideo, deleteVideo } = useApiService();

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleDelete = async () => {
    await deleteVideo(video.id);
  };

  return (
    <Card className="video-card">
      <CardMedia
        component="img"
        alt={video.title}
        height="140"
        image={`/videos/${video.image}`} 
        title={video.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {video.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {video.description}
        </Typography>
        <Link to={video.videoLink} target="_blank" rel="noopener noreferrer">
          <Button variant="contained" color="primary">
            Assistir
          </Button>
        </Link>
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
          onUpdateVideo={updateVideo} 
        />
      )}
    </Card>
  );
};

export default VideoCard;
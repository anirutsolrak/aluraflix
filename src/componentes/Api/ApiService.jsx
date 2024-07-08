// src/apiService.js
const apiUrl = 'https://api-alura-flix-ten.vercel.app'; 

const getVideos = async () => {
  const response = await fetch(`${apiUrl}/videos`);
  return response.json(); 
};

const createVideo = async (newVideo) => {
  const response = await fetch(`${apiUrl}/videos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newVideo) 
  });
  return response.json(); 
};

const updateVideo = async (updatedVideo) => {
  const response = await fetch(`${apiUrl}/videos/${updatedVideo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedVideo)
  });
  return response.json();
};

const deleteVideo = async (id) => {
  const response = await fetch(`${apiUrl}/videos/${id}`, {
    method: 'DELETE'
  });
  return response.json();
};

export { getVideos, createVideo, updateVideo, deleteVideo };
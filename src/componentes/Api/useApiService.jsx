// src/useApiService.js
import { getVideos, createVideo, updateVideo, deleteVideo } from './ApiService';

const useApiService = () => {
  return {
    getVideos,
    createVideo,
    updateVideo,
    deleteVideo
  };
};

export default useApiService;
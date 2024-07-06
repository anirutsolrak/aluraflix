// src/components/HomePage.jsx
import React from 'react';
import { useContext } from 'react'; 
import { VideosContext } from '../context/VideosContext'; 
import Header from '../Header';
import Banner from '../Banner';
import VideoCard from '../VideoCard';
import Footer from '../Footer';

const HomePage = () => {
  const { videos, updateVideo, deleteVideo } = useContext(VideosContext); 

  return (
    <div>
      <Header />
      <Banner />
      <div className="categories">
        <h2>Frontend</h2>
        <div className="video-cards">
          {videos
            .filter((video) => video.category === 'frontend')
            .map((video) => (
              <VideoCard 
                key={video.id} 
                video={video} 
                onUpdateVideo={updateVideo} 
                onDeleteVideo={deleteVideo} 
              /> 
            ))}
        </div>
        <h2>Backend</h2>
        <div className="video-cards">
          {videos
            .filter((video) => video.category === 'backend')
            .map((video) => (
              <VideoCard 
                key={video.title} 
                video={video} 
                onUpdateVideo={updateVideo} 
                onDeleteVideo={deleteVideo} 
              /> 
            ))}
        </div>
        <h2>Inovação</h2>
        <div className="video-cards">
          {videos
            .filter((video) => video.category === 'inovacao')
            .map((video) => (
              <VideoCard 
                key={video.title} 
                video={video} 
                onUpdateVideo={updateVideo} 
                onDeleteVideo={deleteVideo} 
              /> 
            ))}
        </div>
        <h2>Gestão</h2>
        <div className="video-cards">
          {videos
            .filter((video) => video.category === 'gestao')
            .map((video) => (
              <VideoCard 
                key={video.title} 
                video={video} 
                onUpdateVideo={updateVideo} 
                onDeleteVideo={deleteVideo} 
              /> 
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
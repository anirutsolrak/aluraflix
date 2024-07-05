import React, { useState } from 'react';
import Header from '../Header';
import Banner from '../Banner';
import VideoCard from '../VideoCard';
import Footer from '../Footer';

const HomePage = () => {
  const [videos, setVideos] = useState([
    {
      title: 'O que faz uma desenvolvedora Front-End?',
      description: 'Aprenda como construir interfaces web incríveis!',
      image: 'video-frontend.jpg', 
      videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
      category: 'frontend'
    },
    // Adicione mais vídeos aqui...
  ]);

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
              <VideoCard key={video.title} video={video} /> 
            ))}
        </div>
        {/* Outras categorias (Backend, Inovação, Gestão) */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
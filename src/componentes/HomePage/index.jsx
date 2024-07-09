import React, { useState, useEffect } from 'react';
import useApiService from '../Api/useApiService';
import Header from '../Header';
import Banner from '../Banner';
import VideoCard from '../VideoCard';
import Footer from '../Footer';

const HomePage = () => {
  const [videos, setVideos] = useState([]);
  const { getVideos, updateVideo, deleteVideo } = useApiService(); 

  useEffect(() => {
    const fetchVideos = async () => {
      const fetchedVideos = await getVideos();
      setVideos(fetchedVideos);
    };

    fetchVideos();
  }, [videos]);

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
        {/* Outras categorias (Backend, Inovação, Gestão) */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

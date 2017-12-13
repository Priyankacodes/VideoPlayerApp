import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';

const VideoPlayer = ({ currentVideo }) => (
    !currentVideo.id ? <div className="video-player">Please wait...</div> :
        <Container textAlign='center'>
            <iframe src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} 
                    allowFullScreen
                    allowTransparency
                    height={450}
                    width={775}
                    ></iframe>
            <Header textAlign='center'>{currentVideo.snippet.title}</Header>
        </Container>
);

export default VideoPlayer;
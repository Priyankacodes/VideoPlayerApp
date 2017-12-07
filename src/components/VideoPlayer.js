import React, { Component } from 'react';

const VideoPlayer = ({ currentVideo }) => (
    !currentVideo.id ? <div className="video-player">Please wait...</div> :
        <div className="video-player">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} allowFullScreen></iframe>
            </div>
            <div className="video-player-details">
                <h3>{currentVideo.snippet.title}</h3>
                <div>{currentVideo.snippet.description}</div>
            </div>
        </div>
);

export default VideoPlayer;
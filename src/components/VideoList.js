import React, { Component } from 'react';
import { List, Sidebar } from 'semantic-ui-react';

import VideoListEntry from './VideoListEntry';

const VideoList = (props) => (
    <List divided style={{ marginTop: '6em', zIndex: 0 }}>
        {props.videos.map((video) =>
            <VideoListEntry
                key={video.etag}
                video={video}
                selectVideo={props.selectVideo}
            />
        )}
    </List>
);

export default VideoList;
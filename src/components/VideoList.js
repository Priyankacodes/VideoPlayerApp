import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

import VideoListEntry from './VideoListEntry';

const VideoList = (props) => (
    <List divided>
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
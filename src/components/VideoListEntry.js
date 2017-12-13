import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

const VideoListEntry = (props) => (
    <List.Item onClick={() => props.selectVideo(props.video)} style={{ marginRight: '1em', marginLeft: '1em'}}> 
        <List.Content floated='left'>
            <Image src={props.video.snippet.thumbnails.default.url} alt="" />
        </List.Content>   
        <List.Header floated='right'>   
            {props.video.snippet.title}
        </List.Header>
    </List.Item>
);

export default VideoListEntry;
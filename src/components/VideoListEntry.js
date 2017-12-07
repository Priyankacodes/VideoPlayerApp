import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

const VideoListEntry = (props) => (
    <List.Item onClick={() => props.selectVideo(props.video)}>
        <Image src={props.video.snippet.thumbnails.default.url} alt="" />
        <List.Content>
            <List.Header>{props.video.snippet.title}</List.Header>
            <List.Description>{props.video.snippet.description}</List.Description>
        </List.Content>
    </List.Item>
);

export default VideoListEntry;
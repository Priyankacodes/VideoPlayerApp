import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

import NavBar from './NavBar';
import SearchBarContainer from '../containers/SearchBarContainer';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import VideoListContainer from '../containers/VideoListContainer';

const App = () => (
    <div>
        <Container>
            <NavBar />
        </Container>    
        <Container style={{ marginTop: '5em' }}>
            <SearchBarContainer />
            <Segment.Group horizontal> 
                <Segment size='large'>
                    <Container>
                        <VideoPlayerContainer />
                    </Container> 
                </Segment>      
                <Segment> 
                    <VideoListContainer />
                </Segment>    
            </Segment.Group>    
        </Container>    
    </div>
);

export default App;
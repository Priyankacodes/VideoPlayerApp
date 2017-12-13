import React from 'react';
import { Container, Segment, Sidebar, Divider, List, Grid } from 'semantic-ui-react';

import NavBar from './NavBar';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import RightSideBar from './RightSideBar';

const App = () => (
    <div>
        <Grid container columns={2}>
            <Grid.Column>
                <NavBar />
                <Container fluid style={{ marginTop: '6em' }}>
                    <VideoPlayerContainer />
                </Container> 
            </Grid.Column>   
            <Grid.Column>
                <RightSideBar />
            </Grid.Column> 
        </Grid>
    </div>
);

export default App;

//<SearchBarContainer />  
// {/* {/* <Segment 
//                 style={{ minHeight: 450, minWidth: 500, padding: '1em 0em' }} */}
//             // style={{
//             //     position: 'fixed', 
//             //     right: '0',
//             //     bottom: '0',
//             //     minWidth: '100%',
//             //     minHeight: '100%',
//             //     width: 'auto',
//             //     height: 'auto',
//             //     zIndex: '-100',
//             // }}> 
//                 // > */}

{/* <Container>
    <NavBar />
</Container>
    <Container fluid style={{ marginTop: '5em' }}>
        <Container direction='right' visible={true}>
            <VideoListContainer />
        </Container>
        <VideoPlayerContainer />
    </Container>    */}
        //     <RightSideBar />
        // <Container>
        //     <NavBar />
        // </Container>
        // <Container fluid style={{ marginTop: '6em' }}>
        //     <VideoPlayerContainer />
        // </Container> 
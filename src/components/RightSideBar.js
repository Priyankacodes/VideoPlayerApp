import React, { Component } from 'react';
import { Sidebar, Menu, Image, Icon, Header, Label } from 'semantic-ui-react';

import VideoListContainer from '../containers/VideoListContainer';

class RightSideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

    }

    componentWillMount() {

    }

    getDirectMessage() {
    }

    searchDirect() {
        console.log('In searchDirect')
    }

    render() {
        return (
            <Sidebar
                visible={true}
                vertical
                direction='right'
                width='wide'
                style={{ marginTop: '6em' }}
            >
                <VideoListContainer />
            </Sidebar>
        );
    }
}

export default RightSideBar;
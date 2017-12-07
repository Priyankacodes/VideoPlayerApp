import React from 'react';
import { Menu, Icon, Label } from 'semantic-ui-react';

export default () =>
    <Menu fixed='top' inverted>
        <Menu.Item position='left'>
            <Icon name='video' size='large' />
            Video Player App
        </Menu.Item>
        <Menu.Item position='right'>Login</Menu.Item>
    </Menu>
;
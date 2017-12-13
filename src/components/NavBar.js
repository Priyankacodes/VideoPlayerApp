import React from 'react';
import { Menu, Icon, Label } from 'semantic-ui-react';
import SearchBarContainer from '../containers/SearchBarContainer';

class NavBar extends React.Component {
    constructor (props) {
        super(props)

        this.onSignIn = this.onSignIn.bind(this)
    }

    onSignIn(googleUser) {
        console.log("signedin");
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("Name: " + profile.getName());
    }

    componentWillMount () {

        gapi.load('auth2', function () {
            gapi.auth2.init({
                client_id: "510410308978-2bmfc9imnkdgq371dl99v331igfpp2fk.apps.googleusercontent.com",
            }).then(function (auth2) {
                console.log("signed in: " + auth2.isSignedIn.get());
                auth2.isSignedIn.listen(onSignIn);
            });
        });
    }
    
    render () {
        return (
            <Menu fixed='top' style={{ zIndex: 100 }} inverted>
                <Menu.Item>
                    <Icon name='video' size='large' />
                    Video Player App
                </Menu.Item>
                <Menu.Item><SearchBarContainer /></Menu.Item>
                {/* <Menu.Item position='right' style={{ marginRight: '5em' }}>Login</Menu.Item> */}
            </Menu>
        );
    }
}

export default NavBar;

//<Menu.Item position='right'><div class="g-signin2" data-onsuccess="onSignIn"></div></Menu.Item>
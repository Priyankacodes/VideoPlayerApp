import React from 'react';
import { Menu, Icon, Label } from 'semantic-ui-react';
import SearchBarContainer from '../containers/SearchBarContainer';

class NavBar extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            auth2: {}
        }
        this.onSignIn = this.onSignIn.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleAuth2 = this.handleAuth2.bind(this)
    }

    onSignIn (googleUser) {
        console.log("signedin");
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("Name: " + profile.getName());
    }

    handleLogin () {
        console.log('R')
        this.state.auth2.signIn();

    }

    handleAuth2 (auth2) {
        this.setState ({
            auth2: auth2
        })
    }
    componentWillMount () {

        let onSignIn = this.onSignIn
        let handleAuth2 = this.handleAuth2

        gapi.load('auth2', function () {
            gapi.auth2.init({
                client_id: "510410308978-2bmfc9imnkdgq371dl99v331igfpp2fk.apps.googleusercontent.com",
            }).then(function (auth2) {
                console.log("signed in: " + auth2.isSignedIn.get());
                auth2.isSignedIn.listen(onSignIn);
                handleAuth2(auth2)
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
                {/* <Menu.Item position='right' style={{ marginRight: '5em' }} onClick={() => this.handleLogin()}>Login</Menu.Item> */}
            </Menu>
        );
    }
}

export default NavBar;

//<Menu.Item position='right'><div class="g-signin2" data-onsuccess="onSignIn"></div></Menu.Item>
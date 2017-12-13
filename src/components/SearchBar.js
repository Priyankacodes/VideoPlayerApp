import React, { Component } from 'react';
import { Menu, Icon, Label, Input, Button, Container } from 'semantic-ui-react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideos('React Tutorials');  
    }

    handleInputChange(e) {
        this.props.fetchVideos(e.target.value);
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <Container style={{ width: 400 }}>
                <Input
                    className="form-control"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    icon='search'
                    fluid
                    placeholder='Search Videos...'
                />
            </Container>
        );
    }
}

export default SearchBar;
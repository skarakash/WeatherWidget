import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };
    }

    onChange(e) {
        this.setState({
            search: e.target.value
        });
    }

    render() {
        return (
            <input
                type='search'
                placeholder='City'
                value={this.state.search}
                required={true}
                onChange={(e) => this.onChange(e)}
            />
        );
    }
}

export default Input;
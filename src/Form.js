import React, {Component} from 'react';
import Input from './Input';
import Button from './Button';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    onSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <Input />
                <Button />
            </form>
        );
    }
}

export default Form;
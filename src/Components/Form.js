import React, {Component} from 'react';
import Input from './Input';
import Button from './Button';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchField: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.props.getCity(this.state.searchField);
     }

    onInputChange(e){
        this.setState({searchField: e.target.value});

    }

    render() {
        let {searchField} = this.state;
        return (
            <form onSubmit={(e) => this.onSubmit(e)}>
                <Input  onInputChange={this.onInputChange}/>
                <Button searchField={searchField}/>
            </form>
        );
    }
}

export default Form;
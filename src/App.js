import React, {Component} from 'react';
import Form from './Form';
import WeatherWidget from './WeatherWidget';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Form />
                <WeatherWidget />
            </div>
        );
    }
}

export default App;

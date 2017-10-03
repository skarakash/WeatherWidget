import React, {Component} from 'react';

class WeatherWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            temperature: 0
        };
    }

    render() {
        return (
            <div className="WeatherWidget">
                {
                    this.state.city.length > 0 &&
                    <div>
                        {this.state.city} {this.state.temperature}<sup>°C</sup>
                    </div>
                }
                {
                    this.state.city.length === 0 &&
                    'No data'
                }
            </div>
        );
    }
}

export default WeatherWidget;
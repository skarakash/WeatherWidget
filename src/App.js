import React, {Component} from 'react';
import axios from 'axios';
import Form from './Components/Form';
import WeatherWidget from './Components/WeatherWidget';
import CitiesList from './Components/CitiesList';
import './styles/App.css';
import {APIKEY} from './config';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            city: '',
            temperature: "",
            citiesByKey: []
        };
        this.getCity = this.getCity.bind(this);
        this.getTemperature = this.getTemperature.bind(this);
    }

    getCity(city){
        axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKEY}&q=${city}`)
            .then(res => {
                this.setState({citiesByKey: res.data}, ()=> {
                    if(this.state.citiesByKey.length === 0){
                        this.setState({city: ""})
                    }
                    if(this.state.citiesByKey.length === 1){
                        let key = res.data["0"].Key;
                    this.getTemperature(city, key);
                }
                });
            })
            .catch(err => console.log(err));
    }

    getTemperature(city,key){
        axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${APIKEY}&details=true`)
            .then(res => {
                this.setState({
                    city: city,
                    temperature: res.data["0"].Temperature.Metric.Value
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        let {city, temperature, citiesByKey} = this.state;
        return (
            <div className='App'>
                <Form  getCity={this.getCity}/>
                <WeatherWidget city={city} temperature={temperature} />
                <CitiesList citiesByKey={citiesByKey} getTemperature={this.getTemperature}/>
            </div>
        );
    }
}

export default App;

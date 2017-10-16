import React, {Component} from 'react';

class CitiesList extends Component{
    constructor(props){
        super(props);
        this.getKey = this.getKey.bind(this);
    }

    getKey(city, key){
        this.props.getTemperature(city, key);
        this.props.citiesByKey.length = 0;
    }

    render(){
        let {citiesByKey} = this.props;
        const listItems = citiesByKey.map((city) =>  <li key={city.Key} onClick={() => this.getKey(city.EnglishName, city.Key)}
            >{city.EnglishName},  {city.AdministrativeArea.EnglishName} {city.Country.ID}</li>);
        let listWrapStyle = {
          display: citiesByKey.length > 1 ? 'block' : 'none'
        };
        return (
            <div style={listWrapStyle}>
                <h1>Please choose from the list</h1>
                <ul className="citiesList">{listItems}</ul>
            </div>
        )
    }
}

export default CitiesList;
import React, { Component } from 'react';
import WeatherWeek from './components/WeatherWeek'

class App extends Component {
  render() {
    return <div>
        <WeatherWeek city="Krasnodar" />
        <WeatherWeek city="Vienna" />
        <WeatherWeek city="Prague" />
        <WeatherWeek city="Drezden" />
        <WeatherWeek city="Bratislava" />
        <WeatherWeek city="Budapest" />
      </div>;
  }
}

export default App;

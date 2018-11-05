import React, { Component } from 'react';
import WeatherWeek from './components/WeatherWeek'

class App extends Component {
  render() {
    return <div>
        <WeatherWeek city="Krasnodar" cityrussian="Краснодар" />
        <WeatherWeek city="Vienna" cityrussian="Вена" />
        <WeatherWeek city="Prague" cityrussian="Прага" />
        <WeatherWeek city="Drezden" cityrussian="Дрезден" />
        <WeatherWeek city="Bratislava" cityrussian="Братислава" />
        <WeatherWeek city="Budapest" cityrussian="Будапешт" />
      </div>;
  }
}

export default App;

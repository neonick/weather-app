import React, { Component } from 'react'
import WeatherWeek from './components/WeatherWeek'

export default class App extends Component {
  render () {
    return (
      <div>
        <WeatherWeek city="Krasnodar" cityrussian="Краснодар" />
        <WeatherWeek city="Rimini" cityrussian="Римини" />
        <WeatherWeek city="Venezia" cityrussian="Венеция" />
        <WeatherWeek city="Florence" cityrussian="Флоренция" />
        <WeatherWeek city="Rome" cityrussian="Рим" />
        <WeatherWeek city="Bologna" cityrussian="Болонья" />
        {/* <WeatherWeek city='Vienna' cityrussian='Вена' />
        <WeatherWeek city='Prague' cityrussian='Прага' />
        <WeatherWeek city='Drezden' cityrussian='Дрезден' />
        <WeatherWeek city='Bratislava' cityrussian='Братислава' />
        <WeatherWeek city='Budapest' cityrussian='Будапешт' /> */}
      </div>
    );
  }
}

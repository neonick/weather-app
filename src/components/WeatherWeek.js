import React, { Component } from 'react'
import WeatherDay from "./WeatherDay";
import styled from "styled-components";
import { format } from "date-fns";

const url =
  "http://api.apixu.com/v1/forecast.json?key=c740e2f3a23342fa9f8211442182910&q=Krasnodar&days=7";

const locale = require('date-fns/locale/ru')

// const conditions = require("./conditions.json");

const WeatherWeekStyled = styled.ul`
  margin: 60px auto;
  max-width: 1060px;
`

export class WeatherWeek extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      isLoading: true,
    }
  }

  formatDate(date, timeflag) {
    return timeflag ? format(date, "D.M, H:mm") : format(date, "D.M")
  }

  formatDayOfWeek(date) {
    return format(date, "dd", { locale })
  }

  formatStatus(statuscode) {

  }

  getWeekList() {
    const { isLoading, weather } = this.state;

    if (isLoading) {
      return <div>Загрузка...</div>
    }
    else {
      return weather.forecast.forecastday.map((item) => {
        return <WeatherDay
                  key={item.date_epoch} 
                  date={this.formatDate(item.date)} 
                  temp={item.day.avgtemp_c} 
                  feel={item.day.avgtemp_f}
                  dayname={this.formatDayOfWeek(item.date)}
                  status={item.day.condition.text}
                  pic={item.day.condition.icon} 
                />
      })
      
      
    }
  }

  getWeatherData() {
    fetch(url)
      .then(response => response.json())
      .then(weather => {
        this.setState({ 
          weather, 
          isLoading: false })
      })
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.getWeatherData();
  }


  render() {

    const { isLoading, weather } = this.state;

    return <WeatherWeekStyled>
        <h1>
          Погода в <span Style="color: red">Краснодаре</span>
        </h1>

        <h2>Погода сейчас </h2>

        {isLoading ? <div>Загрузка...</div> : 
          <WeatherDay 
          date={this.formatDate(weather.location.localtime, true)} 
          temp={weather.current.temp_c} 
          feel={weather.current.feelslike_c}
          dayname={this.formatDayOfWeek(weather.location.localtime)}
          status={weather.current.condition.text}
          pic={weather.current.condition.icon} 
          primary />
        }

        <br />
        <h2>Погода на неделю</h2>
        
        {this.getWeekList()}

      </WeatherWeekStyled>;

      
  }
}

export default WeatherWeek

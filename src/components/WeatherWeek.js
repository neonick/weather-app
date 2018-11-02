import React, { Component } from 'react'
import WeatherDay from "./WeatherDay";
import styled from "styled-components";
import { format } from "date-fns";

const url =
  "http://api.apixu.com/v1/forecast.json?key=c740e2f3a23342fa9f8211442182910&q=Krasnodar&days=7";

const locale = require('date-fns/locale/ru')

const conditions = require("./conditions.js");

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

  componentDidMount() {
    this.getWeatherData();
  }

  formatDate(date, timeflag) {
    return timeflag ? format(date, "D.M, H:mm") : format(date, "D.M")
  }

  formatDayOfWeek(date) {
    return format(date, "dd", { locale })
  }

  formatStatus(status, dayflag) {
    const result = conditions.find((el) => {
        return el.code === status;
    })
    return dayflag === 0 ? result.night_text : result.day_text;
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
                  temp_max={item.day.maxtemp_c}
                  temp_min={item.day.mintemp_c}
                  dayname={this.formatDayOfWeek(item.date)}
                  status={this.formatStatus(item.day.condition.code)}
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

  


  render() {

    const { isLoading, weather } = this.state;

    return <WeatherWeekStyled>
        <h1>
          Погода в <span>Краснодаре</span>
        </h1>

        <h2>Погода сейчас </h2>

        {isLoading ? <div>Загрузка...</div> : 
          <WeatherDay 
          date={this.formatDate(weather.location.localtime, true)} 
          temp={weather.current.temp_c} 
          feel={weather.current.feelslike_c}
          dayname={this.formatDayOfWeek(weather.location.localtime)}
          status={this.formatStatus(weather.current.condition.code, weather.current.is_day)}
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

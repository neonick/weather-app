import React, { Component } from 'react'
import WeatherDay from './WeatherDay'
import Loader from './Loader'
import styled from 'styled-components'
import { format } from 'date-fns'

const locale = require('date-fns/locale/ru')
const conditions = require('./conditions.js')

const WeatherWeekStyled = styled.div`
  margin: 60px auto;
  max-width: 1060px;
`
export default class WeatherWeek extends Component {
  constructor (props) {
    super(props)
    this.state = {
      weather: {},
      isLoading: true
    }
  }

  componentDidMount () {
    const url = 'https://api.apixu.com/v1/forecast.json?key=c740e2f3a23342fa9f8211442182910&q=' + this.props.city + '&days=7'
    fetch(url)
      .then(response => response.json())
      .then(weather => {
        this.setState({ weather, isLoading: false })
      })
      .catch(error => console.error(error))
  }

  formatDate (date, timeflag) {
    return timeflag ? format(date, 'D.M, H:mm') : format(date, 'D.M')
  }

  formatDayOfWeek (date) {
    return format(date, 'dd', { locale })
  }

  formatStatus (status, dayflag) {
    const result = conditions.find(el => {
      return el.code === status
    })
    return dayflag === 0 ? result.night_text : result.day_text
  }

  getWeekList () {
    const { isLoading, weather } = this.state

    if (isLoading) {
      return <Loader />
    } else {
      return weather.forecast.forecastday.map(item => {
        return (
          <WeatherDay
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
        )
      })
    }
  }

  render () {
    return (
      <WeatherWeekStyled>
        <h1>
          <span>{this.props.cityrussian}</span>
        </h1>
        {this.getWeekList()}
      </WeatherWeekStyled>
    )
  }
}

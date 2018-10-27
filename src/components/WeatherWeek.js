import React, { Component } from 'react'
import WeatherDay from "./WeatherDay";
import styled from "styled-components";

const WeatherWeekStyled = styled.div`
  margin: 200px auto;
  text-align: center;
`

export class WeatherWeek extends Component {
  render() {
    return <WeatherWeekStyled>
        <WeatherDay primary />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
        <WeatherDay />
      </WeatherWeekStyled>;
  }
}

export default WeatherWeek

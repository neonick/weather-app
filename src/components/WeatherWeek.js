import React, { Component } from 'react'
import WeatherDay from "./WeatherDay";
import styled from "styled-components";

const WeatherWeekStyled = styled.ul`
  margin: 60px auto;
  max-width: 1060px;
`

export class WeatherWeek extends Component {
  render() {
    return <WeatherWeekStyled>
        <h1>
          Weather at <span Style="color: red">Krasnodar</span>
        </h1>
        <h2>Today </h2>
        <WeatherDay dm="29.10" day="23" night="15" dayname="ПН" status="ясно-понятно" primary />

        <br />
        <h2>Next week</h2>
        <WeatherDay dm="30.10" day="23" night="15" dayname="ВТ" status="ясно" />
        <WeatherDay dm="31.10" day="23" night="15" dayname="СР" status="ясно" />
        <WeatherDay dm="1.11" day="23" night="15" dayname="ЧТ" status="облачно" />
        <WeatherDay dm="2.11" day="23" night="15" dayname="ПТ" status="облачно" />
        <WeatherDay dm="3.11" day="23" night="15" dayname="СБ" status="дождь" />
        <WeatherDay dm="4.11" day="23" night="15" dayname="ВС" status="ясно" />
        <WeatherDay dm="4.11" day="23" night="15" dayname="ПН" status="ясно" />

        <p>Weather data provided by Apixu Weather API solution</p>
      </WeatherWeekStyled>;

      
  }
}

export default WeatherWeek

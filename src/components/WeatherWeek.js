import React, { Component } from 'react'
import WeatherDay from "./WeatherDay";
import styled from "styled-components";

const WeatherWeekStyled = styled.ul`
  margin: 200px auto;
  text-align: center;
`

export class WeatherWeek extends Component {
  render() {
    return <WeatherWeekStyled>
        <WeatherDay dm="29.10" day="23" night="15" dayname="ПН" status="ясно" primary />
        <WeatherDay dm="30.10" day="23" night="15" dayname="ВТ" status="ясно" />
        <WeatherDay dm="31.10" day="23" night="15" dayname="СР" status="ясно" />
        <WeatherDay dm="1.11" day="23" night="15" dayname="ЧТ" status="облачно" />
        <WeatherDay dm="2.11" day="23" night="15" dayname="ПТ" status="облачно" />
        <WeatherDay dm="3.11" day="23" night="15" dayname="СБ" status="дождь" />
        <WeatherDay dm="4.11" day="23" night="15" dayname="ВС" status="ясно" />
      </WeatherWeekStyled>;
  }
}

export default WeatherWeek

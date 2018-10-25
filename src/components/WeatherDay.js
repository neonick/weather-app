import React, { Component } from 'react'
import styled from "styled-components";

const WeatherDayStyled = styled.div`
  width: 150px;
  height: 130px;
  background: lightyellow;
  border: 1px solid #999;
  border-radius: 10px;
  margin-right: 30px;
  display: inline-block;
`;

export default class WeatherDay extends Component {
  

  render() {
    return (
      <WeatherDayStyled>
        23°C
      </WeatherDayStyled>
    )
  }
}

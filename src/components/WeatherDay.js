import React, { Component } from 'react'
import styled from "styled-components";

const WeatherDayStyled = styled.li`
  width: 150px;
  height: 130px;
  background: ${props => (props.primary ? "lightyellow" : "white")};
  box-shadow: ${props => (props.primary ? "0 0 3px yellow" : "none")};
  border: 1px solid #999;
  border-radius: 7px;
  margin-right: 20px;
  display: inline-block;
  padding-top: 45px;
  box-sizing: border-box;
  position: relative;
`;

const WeekDayName = styled.span`
  color: red;
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
`

const WeekDayStatus = styled.span`
  color: grey;
  text-align: right;
  font-size: 16px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const WeekDayDM = styled.span`
  color: lightgrey;
  text-align: right;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default class WeatherDay extends Component {
  

  render() {
    return <WeatherDayStyled primary={this.props.primary}>
        <WeekDayName>{this.props.dayname}</WeekDayName>
        <WeekDayDM>{this.props.dm}</WeekDayDM>
        днём {this.props.day || 0}
        °C
        <br />
        ночью {this.props.night || 0}
        °C
        <WeekDayStatus>{this.props.status}</WeekDayStatus>
      </WeatherDayStyled>;
  }
}

import React, { Component } from 'react'
import styled from "styled-components";

const WeatherDayStyled = styled.li`
  width: ${props => (props.primary ? "280px" : "130px")};
  height: ${props => (props.primary ? "240px" : "120px")};
  background: white;
  border: 1px solid #999;
  border-radius: 7px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-block;
  padding-top: 45px;
  box-sizing: border-box;
  position: relative;
  text-align: center;
`;

const WeekDayName = styled.span`
  color: red;
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 10px;
  text-transform: uppercase;
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
        <WeekDayDM>{this.props.date}</WeekDayDM>
        <div>
          <img src={this.props.pic} alt='weather icon'/>
        </div>
        температура {this.props.temp}
        °C
        <br />
        ощущается как {this.props.feel}
        °C
        <WeekDayStatus>{this.props.status}</WeekDayStatus>
      </WeatherDayStyled>;
  }
}

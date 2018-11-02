import React, { Component } from 'react'
import styled from "styled-components";

const WeatherDayStyled = styled.li`
  width: ${props => (props.primary ? "230px" : "130px")};
  height: ${props => (props.primary ? "215px" : "185px")};
  background: white;
  border: 1px solid #999;
  border-radius: 7px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-block;
  padding-top: 35px;
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
  font-size: ${props => (props.primary ? "16px" : "12px")};
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

const CurrentTemp = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: red;
  margin-bottom: 12px;
`

export default class WeatherDay extends Component {
  
  renderCurrent() {
    if (this.props.primary) {
      return <div>
          <CurrentTemp>+{this.props.temp}°</CurrentTemp>
          ощущается как +{this.props.feel}°
        </div>;
    } else {
      return <div>
          {this.props.temp_max} – {this.props.temp_min}°
        </div>;
    }
  }

  renderAverage() {

  }

  render() {
    return <WeatherDayStyled primary={this.props.primary}>
        <WeekDayName>{this.props.dayname}</WeekDayName>
        <WeekDayDM>{this.props.date}</WeekDayDM>
        <div>
          <img src={this.props.pic} alt="weather icon" />
        </div>
        {this.renderCurrent()}
        <WeekDayStatus  primary={this.props.primary}>{this.props.status}</WeekDayStatus>
      </WeatherDayStyled>;
  }
}

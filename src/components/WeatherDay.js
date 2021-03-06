import React, { Component } from 'react'
import styled from 'styled-components'

const WeatherDayStyled = styled.div`
  width: ${props => (props.primary ? '230px' : '130px')};
  height: 215px;
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
`

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
  font-size: 13px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`

const WeekDayDM = styled.span`
  color: lightgrey;
  text-align: right;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px; 
`

const CurrentTemp = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: red;
  margin-bottom: 12px;
`

const WeekDayIcon = styled.div`
  img {
    width: 50px;
    margin: 8px 0;
  }
`

export default class WeatherDay extends Component {
  renderCurrent () {
    if (this.props.primary) {
      return <div>
        <CurrentTemp>{this.props.temp}°</CurrentTemp>
          ощущается как {this.props.feel}°
      </div>
    } else {
      return <div>
          днём {this.props.temp_max}°
        <br />
          ночью {this.props.temp_min}°
      </div>
    }
  }

  render () {
    return (
      <WeatherDayStyled primary={this.props.primary}>
        <WeekDayName>{this.props.dayname}</WeekDayName>
        <WeekDayDM>{this.props.date}</WeekDayDM>
        <WeekDayIcon>
          <img src={this.props.pic} alt='weather icon' />
        </WeekDayIcon>
        {this.renderCurrent()}
        <WeekDayStatus primary={this.props.primary}>{this.props.status}</WeekDayStatus>
      </WeatherDayStyled>
    )
  }
}

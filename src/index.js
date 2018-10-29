import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const url =
  "http://api.apixu.com/v1/forecast.json?key=c740e2f3a23342fa9f8211442182910&q=Krasnodar&days=7";

let wdata;

fetch(url)
  .then(response => response.json())
  .then(data => wdata = data);

console.log(wdata);

setTimeout(function() {
  console.log(wdata)
}, 3000)


ReactDOM.render(<App />, document.getElementById("root"));
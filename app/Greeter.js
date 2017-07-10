// const config = require('./greeter.json')

// module.exports = function() {
//   const greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// }
import React, {Component} from 'react'
import config from './greeter.json'
import style from './greeter.css'

class Greeter extends Component {
  render() {
    return (<div className={style.root}> {config.greetText} </div>)
  }
}
export default Greeter;  
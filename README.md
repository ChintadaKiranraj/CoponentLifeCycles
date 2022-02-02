# Component Life Cycle

- Mounting Phase
  - constructor()
  - render()
  - componentDidMount()
- Updating Phase
  - render()
- Unmounting phase
  - componentWillUnmount()
- Behind the scenes
  - Virtual DOM
# CoponentLifeCycles



<!-- App.css -->
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  height: 100vh;
  background-color: #011526;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}

.toggle-button {
  padding: 8px 12px;
  margin-bottom: 30px;
  color: #ffffff;
  background-color: #2EC2B3;
  border-radius: 4px;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 16px;
  border: none;
}


<!-- App.js -->


import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showClock: true}

  onClickClockButton = () => {
    // const {showClock} = this.state
    this.setState(prevState => ({
      showClock: !prevState.showClock,
    }))
  }

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onClickClockButton}
        >
          {showClock ? 'Hide Clock' : 'show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App


<!-- Components
Clock
     index.js -->
     
     import {Component} from 'react'
import './index.css'

class Clock extends Component {
  //  method-1
  //   state = {date: new Date()}

  constructor(props) {
    super(props)

    this.state = {date: new Date()}
    console.log('constructer is called')
  }

  //  method-3

  componentDidMount() {
    console.log('componentDidMount is called')
    this.setState(prevStat => ({
      date: prevStat.date,
    }))

    this.timerID = setInterval(() => {
      this.setState({
        date: new Date(),
      })
    }, 1000)
  }

  //    method -4
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  //  method-2

  render() {
    console.log(Component)
    console.log('Render is called')
    const {date} = this.state
    // const clock = `${date.getHours()}Hr-${date.getMinutes()}Min-${date.getSeconds()}Sec`
    const clock = date.toLocaleTimeString()
    console.log(clock)
    return (
      <div className="clock-container">
        <h1 className="heading">{clock}</h1>
      </div>
    )
  }
}
export default Clock



<!-- index.css -->
.clock-container {
  background-color: #ffffff15;
  border-radius: 16px;
  padding: 30px 50px 40px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading {
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-weight: 400;
}

.time {
  color: white;
  font-size: 60px;
  margin: 20px;
  font-family: 'Roboto';
}


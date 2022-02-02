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

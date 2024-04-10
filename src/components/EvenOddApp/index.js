import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0, type: 'Even'}

  randomFunction = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    const numType = randomNum % 2 === 0 ? 'Even' : 'Odd'
    this.setState(() => ({num: randomNum, type: numType}))
  }

  render() {
    const {num, type} = this.state
    return (
      <div className="backgorund">
        <div className="bg-container">
          <div>
            <h1 className="head">Count {num}</h1>
            <p className="para">Count is {type}</p>
            <button onClick={this.randomFunction} type="button">
              Increment
            </button>
            <p>Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

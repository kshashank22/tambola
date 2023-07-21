import {Component} from 'react'
import './App.css'
import Numbers from './components/Numbers'

class App extends Component {
  state = {count: '', countArray: []}

  AutoChange = () => {
    const {countArray} = this.state

    const mathFunction = () => {
      const counter = Math.ceil(Math.random() * 90)
      if (countArray.includes(counter)) {
        mathFunction()
      } else {
        this.setState({count: counter})
        countArray.push(counter)
      }
    }

    console.log(countArray)

    setInterval(() => {
      mathFunction()
    }, 3000)
  }

  numberChange = () => {
    const {countArray} = this.state

    const mathFunction = () => {
      const counter = Math.ceil(Math.random() * 90)
      if (countArray.includes(counter)) {
        mathFunction()
      } else {
        this.setState({count: counter})
        countArray.push(counter)
      }
    }

    console.log(countArray)
    mathFunction()
  }

  render() {
    const {count, countArray} = this.state
    return (
      <div className="container">
        <h1 className="heading">Tambola Game Play</h1>
        <p className="description">{count}</p>
        <div>
          <button className="button" type="button" onClick={this.numberChange}>
            Number Play
          </button>
          <button className="button2" type="button" onClick={this.AutoChange}>
            Auto Play
          </button>
        </div>

        <ul className="unWanted">
          {countArray.map(each => (
            <Numbers values={each} key={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App

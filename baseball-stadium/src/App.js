import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  componentDidUpdate() {

  }

  update = (balls, strikes) => {
    if (balls !== null) {
      if (balls === 4) {
        this.setState({
          balls: balls
        })
        setTimeout(() => {
          this.setState({
            balls: 0
          })
        }, 1000)
      } else {
        this.setState({
          balls: balls
        })
      }
    }
    if (strikes !== null) {
      if (strikes === 3) {
        this.setState({
          strikes: strikes
        })
        setTimeout(() => {
          this.setState({
            strikes: 0
          })
        }, 1000)
      } else {
        this.setState({
          strikes: strikes
        })
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <Dashboard balls={this.state.balls} strikes={this.state.strikes} update={this.update}/>
      </div>
    );
 }
}

export default App;

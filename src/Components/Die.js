import React, { Component } from 'react';


// Props given to Component: Die Sides(sides),

class Die extends Component {
  state = {
    roll: 0,
    previous: 0,
    history: []
  }

  roll = (numOfSides) => () => {
    let result = Math.floor(Math.random() * Math.floor(numOfSides) + 1)
    let history = this.state.history
    let prevRoll = this.state.roll
    if (prevRoll !== 0) { history.push(prevRoll) }
    this.setState({
      roll: result,
      history: history,
      previous: prevRoll
    })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <span style={{ width: '75px' }}>
          {`Sides: ${this.props.sides}`}
        </span>
        <span style={{ width: '50px' }}>
          <button onClick={this.roll(this.props.sides)}>Roll!</button>
        </span>
        <span style={{ width: '60px' }}>
          {`Roll: ${this.state.roll}`}
        </span>
        <span style={{ width: '95px' }}>
          {this.state.previous !== 0 ? `Previous: ${this.state.previous}` : ``}
        </span>
        <span style={{ width: 'auto' }}>
          {this.state.history.length > 0 ? `History: ${this.state.history}` : ``}
        </span>
      </div>
    );
  }
}

export default Die;

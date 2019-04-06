import React, { Component } from 'react';
import Die from './Die.js'

class DiceBag extends Component {
  state = {
    dice: this.props.startDice,
    displayDice: [],
    selectValue: '',
    stnd: [4,6,8,10,12,20]
  }

  handleChange = (event) => {
    this.setState({
      selectValue: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    let altDiceSet = this.state.dice
    this.state.selectValue === 'stnd' ? this.state.stnd.map(el => altDiceSet.push(el)) : altDiceSet.push(this.state.selectValue)
    this.setState({
      dice: altDiceSet,
    })
  }

  removeDice = (index) => () => {
    let altDiceSet = this.state.dice.filter(el => el !== this.state.dice[index])
    console.log(altDiceSet)
    this.setState({
      dice: altDiceSet
    })
  }

  componentDidMount() {
    if(this.props.startDice[0] === 'stnd'){
      this.setState({
        dice: this.state.stnd
      })
    }else{
      this.setState({
        dice: this.props.startDice
      })
    }
  }

  render() {
    return (
      <div style={{ display: 'flex', flexFlow: 'row wrap', textAlign: 'center',  margin: '3% 5%' }}>
        <h1 style={{ width: '100%' }}>Welcome to the DiceBag!</h1>
        <div style={{ width: '75%', display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <h2 style={{ width: '100%', textAlign: 'center' }}>Current Dice</h2>
          {
            this.state.dice.map((item, i) =>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Die sides={item} style={{ width: 'auto' }} />
                <button onClick={this.removeDice(i)} style={{ width: '57px' }}>Remove</button>
              </div>
            )
          }
        </div>
        <div style={{ width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ width: '100%', textAlign: 'center' }}>Add a new Die or Die Set</h2>
          <form
            onSubmit={this.onSubmit}
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <select value={this.state.selectValue} onChange={this.handleChange}>
              <option value={'4'}>4 Sided Die</option>
              <option value={'6'}>6 Sided Die</option>
              <option value={'8'}>8 Sided Die</option>
              <option value={'0'}>10 Sided Die (0-9)</option>
              <option value={'00'}>10 Sided Die (00-90)</option>
              <option value={'12'}>12 Sided Die</option>
              <option value={'20'}>20 Sided Die</option>
              <option value={'stnd'}>Standard D&D Set</option>
            </select>
            <button type={'submit'}>Add Die</button>
          </form>
        </div>
      </div>
    );
  }
}

export default DiceBag;


// At a minimum to play you'll need one each of: 4-sided dice, 6-sided dice, 
// 8-sided dice, 10-sided dice (0-9 or 00-90), 12-sided dice, and 20-sided dice.
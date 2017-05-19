import React, { Component } from 'react'
import { randomBetween0and2 as randomCard } from './utils/random'
import Game from './Game'

import './GameContainer.css'

const win = state => ({ ...state, won: true })
const lose = state => ({ ...state, lost: true })
const reset = state => ({ ballBeneath: randomCard(), won: false, lost: false})

export default class GameContainer extends Component {
  state = {
    ballBeneath: randomCard(),
    won: false,
    lost: false
  }

  handleSelection = selection => e => {
    const { ballBeneath } = this.state
    if (selection === ballBeneath) {
      this.setState(win)
    } else {
      this.setState(lose)
    }
  }

  reset = () => this.setState(reset)

  render() {
    const { won, lost, ballBeneath } = this.state
    return (
      <Game
        ballBeneath={ballBeneath}
        finished={won || lost}
        won={won}
        reset={this.reset}
        handleSelection={this.handleSelection} />
    )
  }
}

import React, { Component } from 'react';
import GameQueue from '../Components/GameQueue.js'
import MoviesQueue from '../Components/MoviesQueue.js'
import MusicQueue from '../Components/MusicQueue.js'
import ShowQueue from '../Components/ShowQueue.js'

export default class Queue extends Component {

  constructor(){
    super()

    this.state = {
      selectedObj: [],
      Type: ""
    }
  }

  render(){
    return(
      <div className="Queue-container">
        <h2 id="queue-header-title">Queue</h2>
        <GameQueue />
        <MoviesQueue />
        <MusicQueue />
        <ShowQueue />
      </div>
    )
  }

}

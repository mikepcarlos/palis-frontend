import React, { Component } from 'react';
import RecomendationContainer from './RecomendationContainer.js'
import SearchBar from '../SearchBar.js'
import FavoritesContainer from './FavoritesContainer.js'

export default class MediaContainer extends Component {
  constructor(){
    super()

    this.state = {
      allData: [],
      mediaInfo: [],
      isFaveContainerClicked: false
    }
  }

  componentDidMount(){
    this.fetchAllMedia()
  }

  fetchAllMedia = () => {
    const URL = 'http://localhost:3000/api/v1/media_types'

    fetch(URL)
      .then(res => res.json())
      .then(mediaTypes => this.setMediaInfo(mediaTypes.data))
  }

  setMediaInfo = (mediaTypes) => {
    let newArr = [...mediaTypes]
    let mediaAttr = newArr.map(media => media.attributes)
    this.setState({
      allData: newArr,
      mediaInfo: mediaAttr
    })
  }

  clickFaveContainer = () => {
    this.setState({
      isFaveContainerClicked: !this.state.isFaveContainerClicked
    })
  }

  render(){
    return(
      <div>
        <RecomendationContainer />
        <FavoritesContainer media={this.state.allData} isFaveContainerClicked={this.state.isFaveContainerClicked} clickFaveContainer={this.clickFaveContainer}/>
      </div>
    )
  }
}

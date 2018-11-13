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

  addToFavorites = (cardInfo, img) => {
    // const userURL = 'http://localhost:3000/api/v1/users/1'
    // const faveURL = 'http://localhost:3000/api/v1/favorites/1'
    const mediaURL = 'http://localhost:3000/api/v1/media_types'
    fetch(mediaURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        "type": "media-types",
        "attributes": {
          "name": cardInfo.Name,
          "format": cardInfo.Type,
          "img": img
        }
      })
    })
    .then(res => res.json())
    .then(info => this.setState({
      allData: [...this.state.allData, info.data]
    }))
  }

  deleteFav = (e, id, data) => {
    e.preventDefault()
    const faveURL = `http://localhost:3000/api/v1/favorites/${id}`
    fetch(faveURL, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({id})
    }).then(this.removeElement(id, data))
  }

  removeElement = (id, data) => {
    let copy = [...this.state.allData]
    let selectedEl = copy.find(data => data.id === id)
    let index = copy.indexOf(selectedEl)
    copy.splice(index, 1)
    this.setState({
      allData: copy
    })

  }

  render(){
    return(
      <div>
        <RecomendationContainer addToFavorites={this.addToFavorites}/>
        <FavoritesContainer media={this.state.allData} isFaveContainerClicked={this.state.isFaveContainerClicked} clickFaveContainer={this.clickFaveContainer} deleteFav={this.deleteFav}/>
      </div>
    )
  }
}

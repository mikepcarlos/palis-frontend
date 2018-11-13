import React, { Component } from 'react';

export default class RecomendationCard extends Component {

  state={
    imageObj: {},
  }

  parseWikiLink = () => {
    let link = this.props.info.wUrl.split("/")
    let keyword = link[link.length - 1]
    let parsed = keyword.replace(/_/g,"%20")
    return parsed
  }

  fetchImage = () => {
    let keyword = this.parseWikiLink()
    let BASE_URL = `https://en.wikipedia.org/w/api.php?action=query&titles=${keyword}&prop=imageinfo&iiprop=url&generator=images&format=json`
      fetch(BASE_URL)
      .then(res => res.json())
      .then(imgs => this.setState({
        imageObj: imgs.query
      }))

  }

  ////////////////////// FIX THIS SHIT//////////////////////

  getUrl = () => {
    if (this.state.imageObj) {
      let data = this.state.imageObj
      if (data.pages) {
        let keys = Object.values(data.pages)
        if (keys.length !== 1){
          return keys[1].imageinfo[0].url
        } else {
          return './stock.png'
        }
      }
    } else {
      return './stock.png'
    }

  }

  //////////////////////////////////////////////////////////////

  componentDidMount(){
    this.fetchImage()
  }

  handleFaveSubmit = (e) => {
    e.preventDefault()
    this.props.addToFavorites(this.props.info, this.getUrl())
  }

  render(){
      return(
        <form onSubmit={this.handleFaveSubmit}>
          <div className="rec-card">
            <p>
              <img className="rec-images" src={this.getUrl()} alt=""/>
            </p>
            <p id="rec-info">{this.props.info.Name}</p>
            <p id="rec-info">{this.props.info.Type}</p>
            <button type="submit" value="Submit" className="rec-action-button">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </form>
      )

  }

}

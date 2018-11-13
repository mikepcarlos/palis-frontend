import React, { Component } from 'react';
import RecomendationCard from '../Cards/RecomendationCard.js'
import SearchBar from '../SearchBar.js'
import KEY from '../keys.js'

export default class RecomendationContainer extends Component {


  constructor(){
    super()

    this.state = {
      recs: [],
      searchTerm: ""
    }
  }

  fetchRecs = (term) => {
    let newTerm = term.replace(/ /g,"+");
    const URL = `https://tastedive.com/api/similar?q=${newTerm}&info=1&k=322883-${KEY}`
    fetch(URL)
      .then(res => res.json())
      .then(recs => this.setRecomendations(recs.Similar.Results))
  }

  setRecomendations = (data) => {
    let results = [...data]
    this.setState({
      recs: results
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event, term) => {
    this.fetchRecs(term)
  }

  renderRecCard = () => {
    if (this.state.recs.length !== 0){
      return this.state.recs.map(rec => <RecomendationCard key={rec.wUrl} info={rec} addToFavorites={this.props.addToFavorites}/>)
    } else {
      return (<div className="empty-rec-con">
          <i className="fas fa-kiwi-bird"></i>
          <p id="no-recs-text">Nothing to See Here</p>
        </div>)
    }
  }

  beforeAndAfterCon = () => {
    if (this.state.recs.length === 0) {
      return "rec-container-before"
    } else {
      return "rec-container-after"
    }
  }

  render(){
    return(
      <div>
        <SearchBar searchTerm={this.state.searchTerm} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <div className={this.beforeAndAfterCon()}>
          <div className="rec-headers">
            <label id="header">Pic</label>
            <label id="header">Title</label>
            <label id="header">Type</label>
            <label id="header">Do Me</label>
          </div>
        <div className="scroll-con">
          {this.renderRecCard()}
        </div>
        </div>
      </div>
    )
  }

}

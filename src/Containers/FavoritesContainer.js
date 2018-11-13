import React from 'react';
import FavoriteCard from '../Cards/FavoriteCard.js'

const FavoritesContainer = (props) => {

  let content = props.media.filter(types => types.relationships.users.data[0].id === "1")
  let renderFaveCard = content.map(media => <FavoriteCard key={media.id} info={media.attributes} deleteFav={props.deleteFav} id={media.id}/>)

  const dynamicClass = props.isFaveContainerClicked ? "fav-container-after" : "fav-container-before"
  const dynamicCardCon = props.isFaveContainerClicked ? "fav-cards-after" : "fav-cards-before"

  return(
    <div className={dynamicClass}>
      <div className="fav-button">
        <i class="fas fa-star" id="fav-icon" onClick={props.clickFaveContainer}></i>
      </div>
      <div className={dynamicCardCon}>
        {props.isFaveContainerClicked && renderFaveCard}
      </div>
    </div>
  )

}

export default FavoritesContainer

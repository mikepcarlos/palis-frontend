import React from 'react';

const FavoriteCard = (props) => {

  // Add icon for type later

  //Take out picture show for now

  // let nameStr = `${props.info.name}`
  // let removeSpace = nameStr.replace(/\s+/g,'');
  // let renderImg = `./images/${removeSpace.toLowerCase()}.jpg`

  return(
    <form onSubmit={(e) => props.deleteFav(e, props.id, props.info)}>
      <div>
        <ul className="fav-card">
          <p id="fav-name">{props.info.name}</p>
          <p id="fav-type">{/*props.info.format*/}</p>
          <button type="submit" value="Submit" className="fav-action-delete">
            <i class="fas fa-trash-alt"></i>
          </button>
        </ul>
      </div>
    </form>
  )
}

export default FavoriteCard

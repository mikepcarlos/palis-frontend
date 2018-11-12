import React from 'react';

const FavoriteCard = (props) => {

  // Add icon for type later

  //Take out picture show for now

  // let nameStr = `${props.info.name}`
  // let removeSpace = nameStr.replace(/\s+/g,'');
  // let renderImg = `./images/${removeSpace.toLowerCase()}.jpg`

  return(
    <div>
      <ul className="fav-card">
        <p id="fav-name">{props.info.name}</p>
        <p id="fav-type">{/*props.info.format*/}</p>
      </ul>
    </div>
  )
}

export default FavoriteCard

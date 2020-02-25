import React from 'react'
const CardFront= (props) => {
  return (
      <div>
        <div className="image">
          <img alt="Pokemon Img" src={props.pokemonObj.sprites.front} onClick={props.flipCard} />
        </div>
        <div className="content">
          <div className="header">{props.pokemonObj.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.pokemonObj.stats.find(stat => stat.name === 'hp').value}
          </span>
        </div>
      </div>
  )
}


export default CardFront
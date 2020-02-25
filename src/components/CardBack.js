import React from "react"
const CardBack=(props)=>{
    return(
        <div>
        <div className="image">
          <img alt="oh no!"src={props.pokemonObj.sprites.back} onClick ={props.flipCard}/>
        </div>
        <div className="content">
          <div className="header">{props.pokemonObj.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.pokemonObj.stats[5].value}
          </span>
        </div>
      </div>
    )
}

export default CardBack
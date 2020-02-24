import React from 'react'


const PokeCardFront = (props) =>  { 
    // debugger
 
    return( 
        <div onClick={props.cardClick}>
        <div className="image">
          <img src={props.props.sprites.front}/>
          
        </div>
        <div className="content">
          <div className="header">{props.props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.props.stats.find(stat => stat.name ==="hp").value}
          </span>
        </div>
      </div>
    )
}

export default PokeCardFront
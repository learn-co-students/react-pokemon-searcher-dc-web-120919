import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
    constructor(){
      super()
      this.state={toggle: true}
    }
   


  flipCard = () => {
   let toggle = this.state.toggle
   this.setState({toggle: !toggle})
  }
  render() {
   
    return (
      <div >
       {this.state.toggle ?
        <CardFront pokemonObj={this.props.pokemonObj} flipCard={this.flipCard}/>:
        <CardBack pokemonObj={this.props.pokemonObj} flipCard={this.flipCard}/>}
      </div>
    )
  }
}

export default PokemonCard

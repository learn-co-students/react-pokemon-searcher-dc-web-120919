import React from 'react'
import { Card } from 'semantic-ui-react'
import PokeCardFront from './PokeCardFront'
import PokeCardBack from './PokeCardBack'
class PokemonCard extends React.Component {
  state = { 
    showFront : true 
  }
  
  cardClick = () => { 
      let showFront = this.state.showFront
       this.setState({showFront : !showFront})
   }
  render() {
    
    return (
      <Card>
        {this.state.showFront? 
      <PokeCardFront props={this.props.pokeObj} cardClick={this.cardClick}/> : 
      <PokeCardBack props={this.props.pokeObj} cardClick={this.cardClick}/>
        }

      
      </Card>
    )
  }
}

export default PokemonCard

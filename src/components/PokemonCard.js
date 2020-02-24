import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super();
    this.state = {
      cardFlip: false,
    }
  }

  cardFlipper = () =>{
    let cardFlipState = this.state.cardFlip;
    this.setState({cardFlip: !cardFlipState})
  }

  frontInfo = () => {
    return (
      <span>
      <i className="icon heartbeat red" />
      {this.cardInfoGatherer('hp')}
      </span>
    )
  }

  backInfo = () => {
    return (
      <span>
      {this.cardInfoGatherer('attack')}<br />
      {this.cardInfoGatherer('defense')}<br />
      {this.cardInfoGatherer('speed')}<br />
      </span>
    )
  }

  cardInfoGatherer = (value) => {

    let chosenStat = this.props.pokemonInfo.stats.filter(stat => stat.name === value)
    return `${chosenStat[0].value} ${chosenStat[0].name}`
  }

  
  render() {

    let {name, sprites:{front, back} } = this.props.pokemonInfo

    return (
      <Card onClick={e=>{this.cardFlipper(e)}}>
        <div>
          <div className="image">
            <img alt="oh no!" src={(this.state.cardFlip)? back : front}/>
          </div>
          <div className="content">
            {(!this.state.cardFlip)? <div className="header">{name}</div> : null }
          </div>
          <div className="extra content">
            {(!this.state.cardFlip)? this.frontInfo() : this.backInfo() }
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

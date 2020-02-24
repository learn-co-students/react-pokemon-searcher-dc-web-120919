import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super()
    this.state = {
      front: true
    }
  }

  // getKeyByValue = (object, value) => {
  //   debugger
  //   return Object.keys(object).find(key => object[key] === value);
  // }

  handleClick = () => {
    this.setState({
      front: !this.state.front
    })
  }

  render() {
    // {debugger}
    return (
      <Card>
        <div >
          { this.state.front ?
          <div className="image" onClick={this.handleClick}>
            <img alt="oh no!" src={`${this.props.pokemon.sprites.front}`} />
          </div> :
          <div className="image" onClick={this.handleClick}>
              <img alt="oh no!" src={`${this.props.pokemon.sprites.back}`} />
          </div>
          }
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {/* {this.getKeyByValue(this.props.pokemon.stats, "hp")} */}
              {this.props.pokemon.stats.find(s => s.name === 'hp').value || 50}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = { 
    pokeArray: [], 
    searchTerm: ''
  }

  componentDidMount(){ 
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({pokeArray: pokemon}))
  }

  searchForm = (event) => { 
  this.setState({searchTerm: event.target.value})

  }

addPokemon = (pokemon) => { 
  this.setState({pokeArray: [...this.state.pokeArray,pokemon]})

}
  render() {
    let currentPokemon = this.state.pokeArray.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm  addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.searchForm} />
        <br />
        <PokemonCollection pokemons={currentPokemon} />
      </Container>
    )
  }
}

export default PokemonPage

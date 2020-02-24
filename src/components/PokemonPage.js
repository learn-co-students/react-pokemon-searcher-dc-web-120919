import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemon: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon").then(r => r.json()).then(pokemonData => this.setState({pokemon: pokemonData}))
  }

  handleSearchBar = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  addUserPokemon = (inputedPokemon) => {
    this.setState({pokemon: [...this.state.pokemon, inputedPokemon]})
  }


  render() {
    const desiredPokemon = this.state.pokemon.filter(pokemon =>
      pokemon.name.includes(this.state.searchTerm)
    )
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addUserPokemon={this.addUserPokemon}/>
        <br />
        <Search onChange={(event) => this.handleSearchBar(event)} />
        <br />
        <PokemonCollection pokemon={desiredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage

// const allPokemon = [...this.state.pokemon]
// if (this.state.pokemon ===  allPokemon){
//   let result = allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
//   this.setState({
//       pokemon: result
//   })
// }  else {
//   this.setState({ pokemon: allPokemon})
// }
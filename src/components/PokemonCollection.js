import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  constructor(){
    super();
    this.state = {
      pokemon: []
    }
  }

  componentDidMount= ()=>{

    console.log('fetching pokes')
    this.fetchPokemon()
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res=> res.json())
      .then(data => this.setState({pokemon: data}))
  }

  pokemonSearcher = () => {
      //search filter 
      let pokemonArray = [...this.state.pokemon].filter(pokemon => pokemon.name.includes(this.props.searchTerm))

      let filterArray = this.props.filters;
      // add conditional filters here on top of the search 
      if (filterArray.length >= 1){

        let refinedArray = [...pokemonArray]
        for(let i=0; i < this.props.filters.length; i++){
          refinedArray = this.filterPokemon(filterArray[i], refinedArray)
        }
        return refinedArray
      }
      else {
      
        //otherwise, just return the search filtered array
        return pokemonArray
      }
  }

  filterPokemon = (value, pokemonArray) => {

    let refinedArray = pokemonArray.filter(pokemon => pokemon.types.includes(value.toLowerCase()))
    console.log('filtering pokes..', refinedArray)
    return refinedArray 
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1><p>Pokemon Collection</p></h1><br></br>
        {this.pokemonSearcher().map(pokemon => <PokemonCard pokemonInfo={pokemon} key={pokemon.id}></PokemonCard>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection

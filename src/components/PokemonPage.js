import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'

import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  constructor() {
  super()
  this.state={allPokemon: [],
    searchText: ""
  
}
  }
  onChange =(e)=>{
    this.setState({searchText: e.target.value})
 }
  addNewPokemon=(newPokemon)=>{
    console.log(newPokemon)
//   //this.setState({allPokemon: [...this.state.allPokemon,newPokemon]})
  
   
  }

  

  componentDidMount(){
   fetch('http://localhost:3000/pokemon')
   .then(res =>res.json())
   .then(data=>{
     this.setState({allPokemon: data})
   })
  }
  
  
  render() {
    let filteredPokemon = this.state.allPokemon.filter(pokemon=> pokemon.name.includes(this.state.searchText))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon ={this.addNewPokemon}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <PokemonCollection
         allPokemon ={filteredPokemon}
        
        
         />
      </Container>
    )
  }
}

export default PokemonPage

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import Filter from './Filter'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super();
    this.state = {
      searchTerm: '',
      filterList: []
    }
  }

  searchPokemon = (e) => {
    console.log('🤔')
    this.setState({
      searchTerm: e.target.value
    })
  }

  filterPokemon = (e, type) => {
    console.log('🤓')
    //toggles between addition and subtraction of filter 
    let newFilter = (!this.state.filterList.includes(type))? [...this.state.filterList, type] : [...this.state.filterList].filter(filterValue=> filterValue !== type)
    this.setState({
      filterList: newFilter
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.searchPokemon} />
        <div className='ui buttons'>
          <Filter onClick={this.filterPokemon} color='ui red button' type='Fire'/>
          <Filter onClick={this.filterPokemon} color='ui green button' type='Grass'/>
          <Filter onClick={this.filterPokemon} color='ui teal button' type='Flying'/>
          <Filter onClick={this.filterPokemon} color='ui blue button' type='Water'/>
          <Filter onClick={this.filterPokemon} color='ui violet button' type='Poison'/>
          <Filter onClick={this.filterPokemon} color='ui purple button' type='Ghost'/>
        </div>
        <br />
        <br />
        <PokemonCollection searchTerm={this.state.searchTerm} filters={this.state.filterList}/>
      </Container>
    )
  }
}

export default PokemonPage

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import Filter from './Filter'
import ToggleButton from './ToggleButton'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super();
    this.state = {
      searchTerm: '',
      filterList: [],
      newPokemonInfo: {},
      newPokemonTypes: [],
      updated: '',
    }
  }

  componentDidMount(){
    console.log('Pokemon page is updating')
  }

  searchPokemon = (e) => {
    console.log('🤔')
    this.setState({
      searchTerm: e.target.value
    })
  }

  filterPokemon = (e, type, color) => {

    //changes button so user knows the filter is active 
    if(!e.target.className.includes('inverted')){
      this.activeButtonChange(e, color)
    }
    else{
      // console.log('Already inverted, deactivating')
      e.target.className = color
    }
    
    console.log('🤓')
    //toggles between addition and subtraction of filter 
    let newFilter = (!this.state.filterList.includes(type))? [...this.state.filterList, type] : [...this.state.filterList].filter(filterValue=> filterValue !== type)
    this.setState({
      filterList: newFilter
    })
  }

  activeButtonChange = (e, color) => {
 
    //inverts the button color so user knows which filters are active 
    let buttonArray = color.split(' ')
    buttonArray.splice(1,0,'inverted')
    let newColor = buttonArray.join(' ')
    e.target.className = newColor
  }

  addNewPokemon = (newTypes, newInfo) => {

    let pokemonObj = newInfo
    pokemonObj["types"] = newTypes
    console.log('pokemonObj', pokemonObj)

    let objToPost = {
      name: pokemonObj.name, 
      sprites: {
        front: pokemonObj.frontUrl,
        back: pokemonObj.backUrl
      },
      types: pokemonObj.types,
      stats: [
        {
          value: pokemonObj.attack,
          name: 'attack'
        },
        {
          value: pokemonObj.hp,
          name: 'hp'
        },
        {
          value: pokemonObj.defense,
          name: 'defense'
        },
        {
          value: pokemonObj.speed,
          name: 'speed'
        },
      ]
    }

    console.log('pokemonToPost', objToPost)

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(objToPost),
    }).then(res => res.json()).then(data => {
      console.log(data);
      this.setState({
        newPokemonInfo: newInfo,
        newPokemonTypes: newTypes
      });
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pokemonPageAddPokemon={this.addNewPokemon}/>
        <ToggleButton />
        <br />
        <Search onChange={this.searchPokemon} />
        <div className='ui buttons'>
          <Filter onClick={this.filterPokemon} color='ui red button' type='Fire'/>
          <Filter onClick={this.filterPokemon} color='ui orange button' type='Fighting'/>
          <Filter onClick={this.filterPokemon} color='ui green button' type='Grass'/>
          <Filter onClick={this.filterPokemon} color='ui olive button' type='Bug'/>
          <Filter onClick={this.filterPokemon} color='ui brown button' type='Ground'/>
          <Filter onClick={this.filterPokemon} color='ui teal button' type='Flying'/>
          <Filter onClick={this.filterPokemon} color='ui blue button' type='Water'/>
          <Filter onClick={this.filterPokemon} color='ui violet button' type='Poison'/>
          <Filter onClick={this.filterPokemon} color='ui purple button' type='Ghost'/>
          <Filter onClick={this.filterPokemon} color='ui grey button' type='Normal'/>
          <Filter onClick={this.filterPokemon} color='ui pink button' type='Psychic'/>
        </div>
        <ToggleButton />
        <br />
        <br />
        <PokemonCollection searchTerm={this.state.searchTerm} filters={this.state.filterList} newPoke={this.state.newPokemonInfo} newPokeType={this.state.newPokemonTypes}/>
      </Container>
    )
  }
}

export default PokemonPage

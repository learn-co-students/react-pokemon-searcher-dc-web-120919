import React from 'react'
import { Form } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      types: [],
      info: {}
    }
  }

  handleSubmit = (e) => {

    let newInfo = {};
    let newTypeList = [...this.state.types]

    //iterates through each form element, will later on add this to state
    e.target.firstElementChild.childNodes.forEach(formElement => {

      
      //iterates through the pokemon types and adds them to an array 
      if (formElement.className ==='ui fluid multiple selection dropdown'){
        formElement.childNodes.forEach(node => {
          if(node.className==='ui label'){
            newTypeList.push(node.innerText.toLowerCase())
          }
        })
      }
      else{
        let attribute = formElement.childNodes[1].firstElementChild
        let attributeName = attribute.name
        let attributeValue = attribute.value
        newInfo[attributeName] = attributeValue
      }
    })

    console.log('New Info', newInfo)
    console.log('New types', newTypeList)
    this.setState({
      types: newTypeList
    })
    this.setState({
      info: newInfo
    })
    this.props.pokemonPageAddPokemon(newTypeList, newInfo)
  }

  
  
  render() {

    const options = [
      { key: 'fire', text: 'Fire', value: 'fire' },
      { key: 'fighting', text: 'Fighting', value: 'fighting' },
      { key: 'grass', text: 'Grass', value: 'grass' },
      { key: 'bug', text: 'Bug', value: 'bug' },
      { key: 'ground', text: 'Ground', value: 'ground' },
      { key: 'flying', text: 'Flying', value: 'flying' },
      { key: 'water', text: 'Water', value: 'water' },
      { key: 'poison', text: 'Poison', value: 'poison' },
      { key: 'ghost', text: 'Ghost', value: 'ghost' },
      { key: 'normal', text: 'Normal', value: 'normal' },
      { key: 'psychic', text: 'Psychic', value: 'psychic' },
    ]

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e)=>this.handleSubmit(e)} style={{visibility: "visible"}} ref={form => this.formRef = form}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="attack" placeholder="attack" name="attack" />
            <Form.Input fluid label="defense" placeholder="defense" name="defense" />
            <Form.Input fluid label="speed" placeholder="speed" name="speed" />
            <Dropdown placeholder='Types' fluid multiple selection options={options}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

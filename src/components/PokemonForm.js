import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleFormChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let {name, hp, frontUrl, backUrl} = this.state
    // debugger
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepted": "application/json"
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
    .then(resp => resp.json())
    .then(pokemon => this.props.addUserPokemon(pokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={(event) => this.handleFormChange(event)}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={(event) => this.handleFormChange(event)}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={(event) => this.handleFormChange(event)}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={(event) => this.handleFormChange(event)}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

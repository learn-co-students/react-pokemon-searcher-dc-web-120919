import React from "react";
import { Form } from "semantic-ui-react";
class PokemonForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let hp = e.target.hp.value;
    let frontUrl = e.target.frontUrl.value;
    let backUrl = e.target.backUrl.value;
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        stats: [
          {
            value: hp,
            name: "hp"
          }
        ],
        sprites: {
          frontUrl: frontUrl,
          backUrl: backUrl
        }
      })
    })
      .then(res => res.json())
      .then(newPokemon => {
        this.props.addNewPokemon(newPokemon);
      });
    e.target.reset();
  };
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}
export default PokemonForm;
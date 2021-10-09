import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

export default class SearchBar extends Component {
  state = { myInput: "" };
  onInputChange = (e) => {
    this.setState({ myInput: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onInputSubmit(this.state.myInput);
    this.setState({ myInput: "" });
  };
  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Field>
          <label>Video Search</label>
          <Input
            value={this.state.myInput}
            placeholder="Search for a video..."
            action={{ icon: "search" }}
            onChange={this.onInputChange}
          />
        </Form.Field>
      </Form>
    );
  }
}

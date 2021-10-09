import React, { Component } from "react";
import { Form, Input } from "semantic-ui-react";

export default class SearchBar extends Component {
  state = { myInput: "hello" };
  onInputChange = (e) => {
    this.setState({ myInput: e.target.value });
  };
  render() {
    return (
      <Form>
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

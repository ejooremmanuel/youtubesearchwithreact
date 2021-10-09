import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./components/SearchBar";
import { Container, Segment } from "semantic-ui-react";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Segment>
          <SearchBar />
        </Segment>
      </Container>
    );
  }
}

import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./components/SearchBar";
import { Container, Segment } from "semantic-ui-react";
import youtube from "./apis/youtube";
import Videos from "../src/components/VideoList";

export default class App extends Component {
  state = { videos: [] };
  onInputSubmit = async (myInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: myInput,
      },
    });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <Container>
        <Segment>
          <SearchBar onInputSubmit={this.onInputSubmit} />
        </Segment>
        <Videos videos={this.state.videos} />
      </Container>
    );
  }
}

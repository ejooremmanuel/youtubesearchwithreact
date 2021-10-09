import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "./components/SearchBar";
import { Container, Segment, Grid } from "semantic-ui-react";
import youtube from "./apis/youtube";
import Videos from "../src/components/VideoList";
import VideoDetails from "./components/VideoDetail";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };
  onInputSubmit = async (myInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: myInput,
      },
    });
    this.setState({ videos: response.data.items });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <Container>
        <Segment>
          <SearchBar onInputSubmit={this.onInputSubmit} />
        </Segment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <VideoDetails showVideo={this.state.selectedVideo} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Videos
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

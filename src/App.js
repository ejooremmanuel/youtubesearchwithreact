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
        <Grid stackable columns={2}>
          <Grid.Column>
            <Segment>
              <VideoDetails
                showVideo={this.state.selectedVideo}
                style={{ marginBottom: "60px" }}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Videos
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
              style={{ marginTop: "60px" }}
            />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

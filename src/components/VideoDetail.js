import React from "react";
import {
  Segment,
  Container,
  Dimmer,
  Loader,
  Image,
  Card,
} from "semantic-ui-react";

const VideoDetail = ({ showVideo }) => {
  return (
    <div>
      {showVideo ? (
        <Container unit="netboard">
          <iframe
            width="100%"
            height="300vw"
            src={`https://www.youtube.com/embed/${showVideo.id.videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Card style={{ width: "100%" }}>
            <Card.Content>
              <Card.Description>
                {showVideo.snippet.description}
              </Card.Description>
            </Card.Content>
          </Card>
        </Container>
      ) : (
        <Segment>
          <Dimmer active>
            <Loader size="massive">S</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      )}
    </div>
  );
};

export default VideoDetail;

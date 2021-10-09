import React from "react";
import {
  Segment,
  Container,
  Dimmer,
  Loader,
  Image,
  Card,
  Embed,
} from "semantic-ui-react";

const VideoDetail = ({ showVideo }) => {
  return (
    <div>
      {showVideo ? (
        <Container>
          <Embed
            id={showVideo.id.videoId}
            placeholder={showVideo.snippet.thumbnails.medium.url}
            source="youtube"
          />
          <Card style={{ width: "100%" }}>
            <Card.Content>
              <Card.Header>{showVideo.snippet.title}</Card.Header>
              <Card.Description>
                {showVideo.snippet.description}
              </Card.Description>
            </Card.Content>
          </Card>
        </Container>
      ) : (
        <Segment>
          <Dimmer active>
            <Loader size="massive">Search a video...</Loader>
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

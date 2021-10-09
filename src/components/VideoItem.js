import React from "react";
import { Image, Card } from "semantic-ui-react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Card
      style={{ cursor: "pointer", width: "100%" }}
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <Image src={video.snippet.thumbnails.medium.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{video.snippet.title}</Card.Header>
        <Card.Meta>{video.snippet.publishedAt}</Card.Meta>
        <Card.Description>{`${video.snippet.description.slice(
          0,
          20
        )}...`}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default VideoItem;

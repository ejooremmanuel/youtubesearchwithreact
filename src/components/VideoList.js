import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos, onVideoSelect }) => {
  // Get a single video item
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="image">{renderedVideos}</div>;
};

export default VideoList;

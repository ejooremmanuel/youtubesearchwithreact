import React from "react";

const VideoList = ({ videos }) => {
  const renderedVideos = videos.map((video) => console.log(video));
  return <div>{renderedVideos}</div>;
};

export default VideoList;

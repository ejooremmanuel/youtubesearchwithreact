import axios from "axios";
const KEY = "AIzaSyDspX4KMKKi78duX0a7rDyXzXcLVf1ifTc";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});

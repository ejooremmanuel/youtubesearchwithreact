import axios from "axios";
import env from "react-dotenv";
const KEY = "AIzaSyDspX4KMKKi78duX0a7rDyXzXcLVf1ifTc";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 4,
    type: "video",
    key: KEY,
  },
});

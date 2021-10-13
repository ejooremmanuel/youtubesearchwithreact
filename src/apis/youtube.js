import axios from "axios";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 4,
    type: "video",
    key: process.env.API_KEY,
  },
});

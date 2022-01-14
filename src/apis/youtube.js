import axios from "axios";

const KEY = "AIzaSyCsNEq-P07PssTxb44Trr09EYMDP4hiXzk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

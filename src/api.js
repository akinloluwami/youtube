import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyD5AlfOEMNPtAfcPt4KdFO6W_qjtr_nbcg",
  },
});

export default request;

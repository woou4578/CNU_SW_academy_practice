import "./index.scss";
import axios from "axios";

const getPosts = async () => {
  const data = await axios.get("http://localhost:3000/posts");
  console.log(data);
  return data;
};

getPosts();



import { BASEURL } from "../HTTPServices/BaseUrl";
import https from "../HTTPServices/https";

// /https
// .get("https://jsonplaceholder.typicode.com/posts")
// .then(({ data }) => {
//   setState(data);
//   console.log("Data has been set", data);
// })
// .catch((e) => {
//   console.log("Error", e);
// });

export const GetAllPosts = () => {
  return https.get(`${BASEURL}/post`);
};

export const GetPostDetailsById = ({ id }) => {
  return https.get(`${BASEURL}/post/${id}`);
};

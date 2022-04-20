import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import https from "../HTTPServices/https";

export default function PostDetails() {
  const Id = useParams();
  console.log("Id =>>", Id.id[1]);
  const [PostDetails, setPostDetails] = useState({});

  const handlePostDetails = () => {
    https
      .get(`https://jsonplaceholder.typicode.com/posts/${Id.id[1]}`)
      .then((data) => console.log("Response ", data))
      .catch((e) => console.log("Error", e));
  };

  useEffect(() => {
    handlePostDetails();
  }, []);
  return <div>PostDetails</div>;
}

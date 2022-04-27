import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import https from "../HTTPServices/https";
import { GetPostDetailsById } from "../Services/Posts";

export default function PostDetails() {
  const Id = useParams();
  console.log("Id =>>", Id);
  const [PostDetails, setPostDetails] = useState({});

  useEffect(() => {
    GetPostDetailsById({ id: Id.id })
      .then(({ data }) => {
        setPostDetails(data);
        console.log("data ", data);
      })
      .catch((e) => console.log("Error", e));
    // handlePostDetails();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-sm-8">
          <div className="card">
            <img src={PostDetails.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{PostDetails.text}</h5>
              <p className="card-text"></p>
              {/* <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a> */}
              <Link to={`/PostDetails/${PostDetails.id}`}> View Posts </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

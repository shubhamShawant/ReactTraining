import React, { useEffect, useState } from "react";
import axios from "axios";
import https from "../HTTPServices/https";
import { Link } from "react-router-dom";
import { GetAllPosts } from "../Services/Posts";

export default function Posts() {
  const [state, setState] = useState([]);

  //useEffect
  useEffect(() => {
    GetAllPosts().then(({ data: { data } }) => {
      setState(data);
      console.log("Posts DAta =>", data);
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {state.map((item, i) => {
            return (
              <div key={i} className="col col-sm-4">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.text}</h5>
                    <p className="card-text">
                      {item.tags.map((tag, t) => (
                        <button
                          key={t}
                          className="btn btn-sm btn-outline-primary m-2"
                        >
                          {tag}
                        </button>
                      ))}
                    </p>
                    {/* <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a> */}
                    <Link to={`/PostDetails/${item.id}`}> View Posts </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

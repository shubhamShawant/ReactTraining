import React, { useEffect, useState } from "react";
import axios from "axios";
import https from "../HTTPServices/https";

export default function Posts() {
  const [state, setState] = useState([]);

  //useEffect
  useEffect(() => {
    https
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setState(data);
        console.log("Data has been set", data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {state.map((item) => {
            return (
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.body}</p>
                    <a href="#" className="card-link">
                      View More
                    </a>
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

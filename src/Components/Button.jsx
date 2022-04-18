import React from "react";

export default function Button(props) {
  return (
    <div>
      <button style={props.style} onClick={props.trigger}>
        {props.lable}
      </button>
    </div>
  );
}

import React from "react";
import "./style.css";

export default function App(props) {
  return (
    <div className="akhi">
      <h1>Name:{props.name}</h1>
      <h4>Age:{props.age}</h4>
    </div>
  );
}

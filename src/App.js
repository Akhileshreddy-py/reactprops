import React from "react";
import "./style.css";

export default function App(props) {
  return (
    <div className="akhi">
      <h1>name:{props.name}</h1>
      <h4>age:{props.age}</h4>
    </div>
  );
}

import React from "react";
// style
import style from "./Style.css";
const Index = (props) => {
  return (
    <div>
      <button>
        <h3>{props.text}</h3>
      </button>
    </div>
  );
};

export default Index;

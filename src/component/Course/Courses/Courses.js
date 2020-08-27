import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Courses = (props) => {
  const { name, price, Duration } = props.item;
  return (
    <div>
      <h2>this is course:{name}</h2>
      <h4> price: ${price}</h4>
      <h4> course time:{Duration} </h4>
      <button
        style={{
          backgroundColor: "goldenrod",
          width: "150px",
          height: "30px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
        onClick={() => props.handleadd(props.item)}
      >
        <FontAwesomeIcon icon={faCoffee} />
        Enroll Course
      </button>
    </div>
  );
};
export default Courses;

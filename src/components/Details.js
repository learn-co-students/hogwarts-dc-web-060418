import React from "react";

const Details = props => {
  return (
    <div>
      <p>Specialty: {props.hog.specialty}</p>
      <input type="checkbox" checked={props.hog.greased ? true : false} />
      <p>Weight: {props.hog.weight}</p>
      <p>Highest Medal: {props.hog.medal}</p>
    </div>
  );
};

export default Details;

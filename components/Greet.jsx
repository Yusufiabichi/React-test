import React from "react";

// function Greet() {
//   return <h1>Hello Yusufia</h1>;
// }

const Greet = props => {
  // console.log(props)
  return <h1>Hello {props.name} {props.cityName}</h1>
}

export default Greet;

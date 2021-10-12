import React from "react";

const Service = (props) => {
  const { title, duration } = props.service;
  return (
    <div>
      <h1>hello: {title}</h1>
      <h4>{duration}</h4>
    </div>
  );
};

export default Service;

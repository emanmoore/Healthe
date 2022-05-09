import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card p-3 " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

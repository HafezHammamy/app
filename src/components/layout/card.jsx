import React from "react";
import classes from "./card.module.css";

const Card = ({ className, children }) => {
  const alClasses = `${classes.card} ${className}`;
  return <div className={alClasses}>{children}</div>;
};

export default Card;

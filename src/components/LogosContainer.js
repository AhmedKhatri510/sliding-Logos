import React from "react";
import { logoPathTop } from "../constants/logoPath";
import "./LogosContainer.css";
import Icon from "./Logo";

const LogosContainer = () => {
  const logosArr = logoPathTop.map((logoPath) => {
    return <Icon name={logoPath} />;
  });

  return <div className="container">{logosArr}</div>;
};

export default LogosContainer;

import React from "react";
import { logoPathTop, logoPathBot } from "../constants/logoPath";
import "./LogosContainer.css";
import Logo from "./Logo";

const LogosContainer = () => {
  const logosTopArr = logoPathTop.map((logoPath) => {
    return <Logo name={logoPath} where="top" key={logoPath} />;
  });

  const logosBotArr = logoPathBot.map((logoPath) => {
    return <Logo name={logoPath} where="bottom" key={logoPath} />;
  });

  return (
    <div className="container">
      <div className="container--top">
        <div className="slider--top">{logosTopArr}</div>
        <div className="slider--top">{logosTopArr}</div>
      </div>
      <div className="container--bottom">
        <div className="slider--bottom">{logosBotArr}</div>
        <div className="slider--bottom">{logosBotArr}</div>
      </div>
    </div>
  );
};

export default LogosContainer;

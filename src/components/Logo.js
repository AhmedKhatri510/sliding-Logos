import React, { useState, useEffect, useRef } from "react";
import "./LogosContainer.css";

const Logo = ({ name, where }) => {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  let images;

  if (where === "top") {
    images = importAll(
      require.context("../logos/logosTop", false, /\.(png|jpe?g|svg)$/)
    );
  }

  if (where === "bottom") {
    images = importAll(
      require.context("../logos/logosBottom", false, /\.(png|jpe?g|svg)$/)
    );
  }

  return (
    <>
      <img className="logo" src={images[name].default} />
    </>
  );
};

export default Logo;

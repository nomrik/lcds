import React from "react";

export default function Dustball({ x = 0, y = 0, size = 20 }) {
  const style = {
    left: `${x}px`,
    top: `${y}px`,
    width: `${size}px`,
    height: `${size}px`
  };
  return <div className="demo0-dustball" style={style} />;
}

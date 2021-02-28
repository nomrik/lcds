import React, { useCallback, useEffect, useRef, useState } from "react";
import Square from "./Square";
import Dustball from "./Dustball";
import "./App.css";

import track from "./audio/meditation combined.wav";

const animationSpeed = 150;
const numberOfSquares = 10;

export default function App() {
  const ref = useRef();
  const audioRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [parentLeft, setParentLeft] = useState(0);
  const [parentTop, setParentTop] = useState(0);
  const [dustSize, setDustSize] = useState(20);
  const [dustPos, setDustPos] = useState({ x: 0, y: 0 });
  const [showSquares, setShowSquares] = useState(false);

  const [started, setStarted] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const newDustX = Math.min(x - parentLeft, width - dustSize);
      const newDustY = Math.min(y - parentTop, height - dustSize);
      setDustPos({
        x: newDustX,
        y: newDustY
      });
    },
    [parentLeft, parentTop, dustSize]
  );

  const handleMouseEnter = useCallback((e) => {
    setDustSize(dustSize + 10);
  });

  const handleClick = () => {
    if (!started) {
      const audioPlayer = audioRef.current;
      if (audioPlayer && audioPlayer.readyState === 4) {
        audioPlayer.play();
      }
      setStarted(true)
    } else {
      setShowSquares(!showSquares);
    }
  };

  useEffect(() => {
    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;
    const rect = ref.current.getBoundingClientRect();
    setParentLeft(rect.left);
    setParentTop(rect.top);
    setWidth(width);
    setHeight(height);
  }, []);

  return (
    <div>
      <audio src={track} ref={audioRef}></audio>
      <button onClick={handleClick}>{started ? "Toggle Squares" : "Start!"}</button>
      <div className="demo0" ref={ref} onMouseMove={handleMouseMove}>
        {started && [...Array(numberOfSquares).keys()].map((key) => (
          <Square
            key={key}
            width={width}
            height={height}
            animationSpeed={animationSpeed}
            onMouseEnter={handleMouseEnter}
            show={showSquares}
          />
        ))}
        {started && <Dustball x={dustPos.x} y={dustPos.y} size={dustSize} />}
      </div>
    </div>
  );
}

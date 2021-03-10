import React, { useCallback, useEffect, useRef, useState } from "react";
import Square from "./Square";
import Dustball from "./Dustball";
import Triangle from "./Triangle";
import "./App.css";

import track from "./audio/meditation original.wav";

import eli_1 from "./videos/eli_1.mp4";
import susie_1 from "./videos/susie_1.mp4";
import susie_2 from "./videos/susie_2.mp4";
import pauline_1 from "./videos/pauline_1.mp4";
import pauline_2 from "./videos/pauline_2.mp4";
import pauline_3 from "./videos/pauline_3.mp4";


const videos = [
  eli_1,
  susie_1,
  susie_2,
  pauline_1,
  pauline_2,
  pauline_3
]

const animationSpeed = 150;

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
    <div class="app-root">
      <audio src={track} ref={audioRef}></audio>
      <button onClick={handleClick}>{started ? "Toggle Squares" : "Start!"}</button>
      <div className="demo0" ref={ref} onMouseMove={handleMouseMove}>
        {started && videos.map((videoSrc, index) => (
          <Square
            key={videoSrc + index}
            videoSrc={videoSrc}
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
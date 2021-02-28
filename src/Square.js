import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import eliVideo from "./videos/Eli.mp4";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const squareSize = 100;

export default function Square({
  width,
  height,
  animationSpeed,
  onMouseEnter,
  show
}) {
  const videoRef = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [duration, setDuration] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const controls = useAnimation();

  const style = {
    width: `${squareSize}px`,
    height: `${squareSize}px`,
    opacity: show ? "1" : opacity
  };

  const handleMouseEnter = useCallback((e) => {
    setIsInside(true);
    onMouseEnter();

    setTimeout(() => {
      setIsInside(false);
    }, 4000);
  });

  useEffect(() => {
    const player = videoRef.current;
    if (player && player.readyState === 4) {
      if (isInside) {
          player.currentTime = getRandomArbitrary(0, duration);
          setOpacity(1);
          player.volume = 1;
          player.play();
      } else {
          let scale = 1;
          const interval = setInterval(() => {
              if (player.volume < 0.1) {
                  player.pause();
                  setOpacity(0);
                  clearInterval(interval);
              } else {
                  scale = scale - 0.1;
                  console.log("Volume: ", scale);
                  console.log("Opacity: ", scale);
                  player.volume = scale;
                  setOpacity(scale);
              }
          }, 200)
      }
    }
  }, [isInside]);

  const onVideoReady = () => {
    const player = videoRef.current;
    if (player) {
        console.log("Volume: ", player.volume);
        console.log("Duration: ", player.duration);
        setDuration(player.duration);
    }
  };

  useEffect(() => {
    const newX = getRandomArbitrary(0, width);
    const newY = getRandomArbitrary(0, height);
    const dx = newX - pos.x;
    const dy = newY - pos.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const duration = Math.round((distance / animationSpeed) * 100) / 100;
    controls
      .start({
        x: newX,
        y: newY,
        transition: { ease: "linear", duration }
      })
      .then(() => {
        setPos({
          x: newX,
          y: newY
        });
      });
  }, [pos, controls]);


  return (
    <motion.div
      animate={controls}
      className="demo0-block"
      onMouseEnter={handleMouseEnter}
      style={style}
    >
      <video
        width={squareSize}
        height={squareSize}
        onDurationChange={onVideoReady}
        ref={videoRef}
      >
        <source src={eliVideo} type="video/mp4"></source>
      </video>
    </motion.div>
  );
}

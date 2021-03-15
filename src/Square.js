import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import ReactPlayer from "react-player/vimeo";
import Triangle from "./Triangle";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// const squareSize = getRandomArbitrary(50,150);

export default function Square({
  width,
  height,
  videoSrc,
  animationSpeed,
  onMouseEnter,
  show
}) {
  const videoRef = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [duration, setDuration] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [squareSize] = useState(getRandomArbitrary(50,150));
  const controls = useAnimation();

  const style = {
    width: `${squareSize}px`,
    height: `${squareSize}px`,
    opacity: show ? "1" : opacity,
  };

  const handleMouseEnter = useCallback((e) => {
    setIsInside(true);
    onMouseEnter();

    setTimeout(() => {
      setIsInside(false);
    }, 4000);
  });

  const fadeIn = useCallback((player) => {
    let fadeInScale = 0;
    player.seekTo(getRandomArbitrary(0, duration));
    setOpacity(fadeInScale);
    setVolume(0);
    setIsPlaying(true);
    const interval = setInterval(() => {
      if (fadeInScale > 0.75) {
          clearInterval(interval);
      } else {
          fadeInScale = fadeInScale + 0.15;
          setVolume(fadeInScale);
          setOpacity(fadeInScale);
      }
    }, 200)
  }, [duration])

  const fadeOut = useCallback((player) => {
    let fadeOutScale = 1;
    const interval = setInterval(() => {
        if (fadeOutScale < 0.1) {
            setIsPlaying(false);
            setOpacity(0);
            clearInterval(interval);
        } else {
            fadeOutScale = fadeOutScale - 0.1;
            setVolume(fadeOutScale);
            setOpacity(fadeOutScale);
        }
    }, 200)
  }, [])

  useEffect(() => {
    const player = videoRef.current;
    if (player && duration) {
      if (isInside) {
          fadeIn(player);
      } else {
          fadeOut(player);
      }
    }
  }, [isInside]);

  const onVideoReady = (duration) => {
    console.log(duration);
    setDuration(duration);
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
    <div>
      {/* <video
        width={squareSize}
        height={squareSize}
        onDurationChange={onVideoReady}
        ref={videoRef}
        class="rotating-video"
      >
        <source src={videoSrc} type="video/mp4"></source>
      </video> */}
      <ReactPlayer 
        ref={videoRef}
        width={squareSize}
        height={squareSize}
        onDuration={onVideoReady}
        url={videoSrc}
        playing={isPlaying}
        volume={volume}
      />
      {/* <Triangle width={squareSize + 30} height={squareSize + 30}/> */}
    </div>
    </motion.div>
  );
}

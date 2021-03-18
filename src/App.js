import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import { getRandomArbitrary } from "./utils";
import Square from "./Square";
import Dustball from "./Dustball";

import { videoURLs as videos, animationURL, projectURL } from "./constants";

const animationSpeed = 150;

export default function App({ init }) {
  const ref = useRef();
  const videoRef = useRef();
  const bgRef = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [parentLeft, setParentLeft] = useState(0);
  const [parentTop, setParentTop] = useState(0);
  const [dustSize, setDustSize] = useState(20);
  const [dustPos, setDustPos] = useState({ x: 0, y: 0 });
  const [showSquares, setShowSquares] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [shouldShowDusty, setShowDusty] = useState(false);

  const [started, setStarted] = useState(false);
  const [started2, setStarted2] = useState(false);
  const [dustyLeft, setDustyLeft] = useState(`${getRandomArbitrary(10, 90)}%`);
  const [dustyTop, setDustyTop] = useState(`${getRandomArbitrary(10, 90)}%`);

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

  const handleClick = () => {
    if (!started) {
      setStarted(true);
      setShowDusty(false);
      alternateVideo();
      setTimeout(() => {
        setStarted2(true);
      }, 7000)
    }
  };

  useEffect(() => {
    if (init) {
      const bg = bgRef.current;
      bg.seekTo(1);

      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      const rect = ref.current.getBoundingClientRect();
      setParentLeft(rect.left);
      setParentTop(rect.top);
      setWidth(width);
      setHeight(height);
      setTimeout(() => {
        setShowDusty(true);
      }, 12000)
    }
  }, [init]);

  const alternateVideo = useCallback(() => {
    if (init) {
      setTimeout(() => {
        setOpacity(0.2);
        setTimeout(() => {
          setOpacity(0);
          alternateVideo();
        }, getRandomArbitrary(3000, 4000))
      }, getRandomArbitrary(120000, 180000))
    }
  }, [init])

  useEffect(() => {
    if (init) {
      const video = videoRef.current;
      // Get access to the camera!
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
      }
    }
  }, [init])

  const commonStyle = {
    position: "absolute",
    top: 0,
    left: 0
  }

  return (
    <div class="app-root">
      <div className="demo0" ref={ref} onMouseMove={handleMouseMove}>
        <video
          ref={videoRef} 
          class="video" 
          width="50%" 
          height="50%"
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            zIndex: 3,
            opacity: opacity
          }} 
          autoplay
        >
        </video>
        <ReactPlayer 
          width="75%"
          height="75%"
          url={projectURL}
          style={{
            ...commonStyle, 
            zIndex: 2,
            margin: "30px",
            opacity: started2 ? 1 : 0
          }}
          playing={init}
          volume={1}
        />
        <ReactPlayer 
          ref={bgRef}
          width="100%"
          height="100%"
          url={animationURL}
          style={{
            ...commonStyle, zIndex: 0
          }}
          playing
          muted
          loop
        />
        {shouldShowDusty && 
          <div 
            className="dusty" 
            onClick={handleClick}
            style={{
              left: dustyLeft,
              top: dustyTop
            }}>
          </div>
        }
        {/* {started && videos.map((videoSrc, index) => (
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
        {started && <Dustball x={dustPos.x} y={dustPos.y} size={dustSize} />} */}
      </div>
    </div>
  );
}

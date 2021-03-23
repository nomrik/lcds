import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import { getRandomArbitrary, delay } from "./utils";

import { animationURL, projectURL } from "./constants";

export default function App({ init, setEnded }) {
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
  const [shouldShowDustyClick, setShowDustyClick] = useState(false);

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
      delay(getRandomArbitrary(7000, 8500)).then(() => {
        setStarted2(true);
      })
      // setTimeout(() => {
      //   setStarted2(true);
      // }, getRandomArbitrary(7000, 8500))
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

      delay(getRandomArbitrary(8000, 10000)).then(() => {
        setShowDusty(true);
        return delay(getRandomArbitrary(7000, 9000))
      }).then(() => {
        setShowDustyClick(true);
      })
    }
  }, [init]);

  const alternateVideo = useCallback(() => {
    if (init) {
      delay(getRandomArbitrary(120000, 180000)).then(() => {
        setOpacity(0.2);
        return delay(getRandomArbitrary(800, 1200))
      }).then(() => {
        setOpacity(0);
        return delay(getRandomArbitrary(100000, 150000));
      }).then(() => {
        setOpacity(0.2);
        return delay(getRandomArbitrary(4000, 6000));
      }).then(() => {
        setOpacity(0);
      })
      // setTimeout(() => {
      //   setOpacity(0.2);
      //   setTimeout(() => {
      //     setOpacity(0);
      //     alternateVideo();
      //   }, getRandomArbitrary(3000, 4000))
      // }, getRandomArbitrary(120000, 180000))
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

  const endShow = useCallback(() => {
    setEnded(true);
  }, [setEnded]);

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
          onEnded={endShow}
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
          <div className="starter black" 
            onClick={handleClick}
            style={{
                left: dustyLeft,
                top: dustyTop
              }}
            >
            {shouldShowDustyClick && <p className="starter-text">click me?</p>}
            <div 
              className="dusty" 
            >
            </div>
          </div>
        }
      </div>
    </div>
  );
}

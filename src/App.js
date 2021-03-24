import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/vimeo";
import { getRandomArbitrary, delay, convertToMs } from "./utils";

import { animationURL, projectURL, htmlVideoDimensions, vimeoVideoDimensions, margin } from "./constants";

export default function App({ init, setEnded }) {
  const ref = useRef();
  const videoRef = useRef();
  const projectRef = useRef();
  const bgRef = useRef();
  const [opacity, setOpacity] = useState(0);
  const [shouldShowDusty, setShowDusty] = useState(false);
  const [shouldShowDustyClick, setShowDustyClick] = useState(false);

  const [started, setStarted] = useState(false);
  const [started2, setStarted2] = useState(false);
  const [dustyLeft, setDustyLeft] = useState(`${getRandomArbitrary(10, 90)}%`);
  const [dustyTop, setDustyTop] = useState(`${getRandomArbitrary(10, 90)}%`);

  const [webcamSize, setWebcamSize] = useState(0.5);
  const [webcamLeft, setWebcamLeft] = useState(30);
  const [webcamTop, setWebcamTop] = useState(30);

  const [projectSize] = useState(1.2);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleClick = () => {
    if (!started) {
      setStarted(true);
      setShowDusty(false);
      delay(getRandomArbitrary(7000, 8500)).then(() => {
        setStarted2(true);
      })
    }
  };

  useEffect(() => {
    if (init) {
      const bg = bgRef.current;
      bg.seekTo(0);

      delay(getRandomArbitrary(8000, 10000)).then(() => {
        setShowDusty(true);
        return delay(getRandomArbitrary(7000, 9000))
      }).then(() => {
        setShowDustyClick(true);
      })
    }
  }, [init]);

  // Scheduler
  useEffect(() => {
    if (init) {
      delay(convertToMs(2, 21)).then(() => {
        activateWebcam({
          size: 0.35,
          left: 410,
          bottom: 200,
          opacity: 0.4,
          duration: 500
        })
      })

      delay(convertToMs(2, 50.1)).then(() => {
        activateWebcam({
          size: 0.3,
          left: -25,
          top: -25,
          opacity: 0.5,
          duration: 150
        })
      })

      delay(convertToMs(4, 19)).then(() => {
        activateWebcam({
          size: 0.45,
          left: 120,
          bottom: 0,
          opacity: 0.4,
          duration: 750
        })
      })

      delay(convertToMs(4, 33)).then(() => {
        activateWebcam({
          size: 0.3,
          right: 220,
          top: 30,
          opacity: 0.22,
          duration: 6500
        })
      })

      // delay(convertToMs(5, 18)).then(() => {
      //   activateWebcam({
      //     size: 0.45,
      //     left: 60,
      //     bottom: 60,
      //     opacity: 0.25,
      //     duration: 4000
      //   })
      // })

      delay(convertToMs(5, 41)).then(() => endShow());
    }
  }, [init])

  useEffect(() => {
    if (init) {
      const video = videoRef.current;
      const project = projectRef.current;
      // Get access to the camera!
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
      }

      // console.log("projectRef: ", project.getInternalPlayer());
      // project.seekTo(4 * 60 + 33);
      // // project.getInternalPlayer().pause();
      // // setIsPlaying(false);
      // // setTimeout(() => setIsPlaying(false), 100);
      // activateWebcam({
      //   size: 0.3,
      //   right: 220,
      //   top: 30,
      //   opacity: 0.22,
      //   duration: 6500
      // })
    }
  }, [init])

  const activateWebcam = useCallback(({
    size,
    left,
    top,
    right,
    bottom,
    opacity = 0,
    duration = 0
  }) => {
    let finalLeft = 0;
    if (left !== undefined) {
      finalLeft = left;
    } else if (right !== undefined) {
      finalLeft = (vimeoVideoDimensions.width * projectSize) - (htmlVideoDimensions.width * size) - right;
    }

    finalLeft += margin;

    let finalTop = 0;
    if (top !== undefined) {
      finalTop = top;
    } else if (bottom !== undefined) {
      finalTop = (vimeoVideoDimensions.height * projectSize) - (htmlVideoDimensions.height * size) - bottom;
    }

    finalTop += margin;

    setWebcamLeft(finalLeft);
    setWebcamTop(finalTop);
    setWebcamSize(size);
    setOpacity(opacity);
    setTimeout(() => {
      setOpacity(0);
    }, duration)
  }, [setWebcamSize, setWebcamLeft, setWebcamTop, setOpacity])

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
      <div className="demo0" ref={ref}>
        <video
          ref={videoRef} 
          class="video" 
          style={{
            position: "absolute",
            top: `${webcamTop}px`,
            left: `${webcamLeft}px`,
            width: `${htmlVideoDimensions.width * webcamSize}px`,
            height: `${htmlVideoDimensions.height * webcamSize}px`,
            zIndex: 3,
            opacity
          }} 
          autoplay
        >
        </video>
        <ReactPlayer 
          ref={projectRef}
          width={`calc(${vimeoVideoDimensions.width}px * ${projectSize})`}
          height={`calc(${vimeoVideoDimensions.height}px * ${projectSize})`}
          url={projectURL}
          style={{
            ...commonStyle, 
            left: `${margin}px`,
            top: `${margin}px`,
            zIndex: 2,
            // opacity: 1
            opacity: started2 ? 1 : 0
          }}
          playing={init}
          volume={1}
          // onEnded={endShow}
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

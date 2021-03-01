import React, { useRef, useEffect } from "react";

export default function Triangle({
    width = 100,
    height = 100
}) {
    const canvasRef = useRef();
    const style = {
        position: "absolute",
        left: "-15px",
        top: "-15px"
    }

    useEffect(() => {
        const element = canvasRef.current;
        const ctx = element.getContext('2d');
        ctx.fillStyle = 'rgb(240, 240, 232)';
        // ctx.fillRect(0, 0, width, height);
    }, [width, height])
    return (
        <canvas ref={canvasRef} width={width} height={height} style={style}></canvas>
    )
}
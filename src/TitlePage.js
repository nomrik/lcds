import React from "react";

export default function TitlePage({
    started,
    setStarted
}) {
    return (
        <div className={`title-page${started ? " started" : ""}`}>
            <h1>pölypallo</h1>
            <h2>by ella holappa & omri kochavi</h2>
            <div className="starter" onClick={() => setStarted(true)}>
                <div className="dusty white"></div>
            </div>
        </div>
    )
}
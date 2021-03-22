import React, { useState } from "react";
import TitlePage from "./TitlePage";
import EndingPage from "./EndingPage";
import App from "./App";

import "./App.css";
import "@fontsource/roboto/100.css" 

export default function Home() {
    const [ started, setStarted ] = useState(false);
    const [ ended, setEnded ] = useState(false);
    return !ended ? (
        <React.Fragment>
            <TitlePage started={started} setStarted={setStarted}/>
            <App init={started} setEnded={setEnded} />
        </React.Fragment>
    ) : <EndingPage />
}
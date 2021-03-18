import React, { useState } from "react";
import TitlePage from "./TitlePage";
import App from "./App";

import "./App.css";

export default function Home() {
    const [ started, setStarted ] = useState(false);
    return (
        <React.Fragment>
            <TitlePage started={started} setStarted={setStarted}/>
            <App init={started} />
        </React.Fragment>
    )
}
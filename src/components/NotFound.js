import React from "react";
import Assets from "./Assets";

const NotFound = () => {

    const playBGM = () => {
        Assets.BGM.Err.play();
    }

    window.onload = (e) => {
        playBGM();
    }

    return (
        <div className="not-found">
            <h1>You shouldn't be here...</h1>
            <img src={Assets.Images.Corrupt} width="750" alt="404"/>
        </div>
    )

}

export default NotFound;
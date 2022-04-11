import React from "react";
import Assets from "./Assets";

const NotFound = () => {

    return (
        <div className="404-container">
            <img src={Assets.Images.Corrupt} alt="404"/>
            <h1>You shouldn't be here...</h1>
        </div>
    )

}

export default NotFound;
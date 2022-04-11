import React from "react";
import Assets from "./Assets";

const NotFound = () => {

    return (
        <div className="not-found">
            <img src={Assets.Images.Corrupt} width="750" alt="404"/>
            <h1>You shouldn't be here...</h1>
        </div>
    )

}

export default NotFound;
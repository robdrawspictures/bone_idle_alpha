import React from "react";
import {Link} from 'react-router-dom';
import Post from "./Post.js";
import Thread from "./Thread.js";

const ViewThread = ({thread}) => {

    if(!enemy){
        return <p>Loading...</p>
    }

    const backUrl = "/forum";

    return(
        <div className="view-thread">
            <p>Thread deets fam.</p>
        </div>
    )
}
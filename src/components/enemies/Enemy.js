import React, {Fragment} from 'react';
import Assets from "../Assets.js";

const Enemy = ({enemy}) => {

  if (!enemy){
    return "Loading..."
  }


  return (
    <Fragment>
    <img src="Assets.Images.{enemy.name}" width="50" alt="enemy"/>
    <p>
    {enemy.name}
    </p>
    </Fragment>
  )
}

export default Enemy;

import React, {Fragment} from 'react';
import Assets from "../Assets.js";

const Enemy = ({enemy}) => {

  if (!enemy){
    return "Loading..."
  }

  let enemyImg = Assets.Images.enemy.name;


  return (
    <Fragment>
    <img src={enemyImg} width="50" alt="enemy"/>
    <p>
    {enemy.name}
    </p>
    </Fragment>
  )
}

export default Enemy;

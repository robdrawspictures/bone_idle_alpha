import React, {Fragment} from 'react';
import Assets from "../Assets.js";

const Enemy = ({enemy}) => {

  if (!enemy){
    return <p>"Loading..."</p>
  }

  
  const getEnemyImg = (enemy) => {
    let imgSrc;
    let images = Assets.Images;
    let enemyName = enemy.name;
    for(let [name, src] of Object.entries(images)){
        if(name === enemyName){
             imgSrc = src;
        }
    }
      return imgSrc;
  }

  return (
    <Fragment>
    <img src={getEnemyImg(enemy)} width="125" alt="enemy"/>
    <p>
    {enemy.name}
    </p>
    </Fragment>
  )
}

export default Enemy;

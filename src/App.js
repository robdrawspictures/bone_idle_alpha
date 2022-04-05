import React, {useState, useEffect} from 'react';
import Assets from './components/Assets';
import Enemy from './components/Enemy';
import './App.css';

function App() {

  const [level, setLevel] = useState(0);
  const [dmg, setDMG] = useState(10);
  const [critDMG, setCritDMG] = useState(2);
  const [critChance, setCritChance] = useState(9);
  const [xp, setXP] = useState(0);
  const [nextLevel, setNextLevel] = useState(100);
  const [killCount, setKillCount] = useState(0);
  const [lambentOrb, setLambentOrb] = useState(0);
  const [radiantOrb, setRadiantOrb] = useState(0);
  
  let monsters = [
    {"name": "Slime", "hp": 20, "maxHP": 20, "src": Assets.Images.Slime},
    {"name": "Mushaboom", "hp": 80, "maxHP": 80, "src": Assets.Images.Mushaboom},
    {"name": "Skeleton", "hp": 20, "maxHP": 20, "src": Assets.Images.Skeleton},
    {"name": "Mimic", "hp": 90, "maxHP": 90, "src": Assets.Images.Mimic},
    {"name": "Unborn", "hp": 40, "maxHP": 40, "src": Assets.Images.Unborn}
  ]

  const getMonsterCount = () => {
    return monsters.length;
  }

  const monsterRandomiser = () => {
    let ceiling = getMonsterCount() - 1;
    return Math.floor(Math.random() * ceiling);
  }

  let currentMonster = monsters[monsterRandomiser()];

  const [newMonster, setNewMonster] = useState({
    name: currentMonster.name,
    hp: currentMonster.hp,
    maxHP: currentMonster.maxHP,
    src: currentMonster.src
  });

  const handleAttack = () => {
    if(currentMonster.hp > 0){
      setNewMonster(previousState => {
        console.log("I am in handleAttack in App.js")
        return {...previousState, hp: currentMonster.hp - dmg}
      })
      currentMonster = newMonster;
    console.log(currentMonster.hp)
    }
  }

  const handleRespawn = () => {
      currentMonster = monsters[monsterRandomiser()];
      killCount ++;
      xp += 10
      checkXP();
    }

  const checkXP = () => {
    if(xp >= nextLevel){
      handleLevelUp();
    } 
  }

  const handleLevelUp = () => {
    level ++;
    xp = xp - nextLevel;
    nextLevel = nextLevel * 2;
    console.log(level);
    console.log(nextLevel);
  }
  

  return (
    <div className="game-container">
      <Enemy name={currentMonster.name} hp={currentMonster.hp} maxHP={currentMonster.maxHP} src={currentMonster.src} handleAttack={this.handleAttack} handleRespawn={handleRespawn}/>
      <p>{monsters[0].name}</p>
      <img src={monsters[0].src} alt="monstarrr"/>
      <p>HP: {monsters[0].hp}/{monsters[0].maxHP}</p>
    </div>
  );
}

export default App;

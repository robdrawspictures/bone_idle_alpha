import React, {useState, useEffect} from 'react';
import Assets from './components/Assets';
import Enemy from './components/Enemy';
import './App.css';

function App() {

  const [level, setLevel] = useState(1);
  const [dmg, setDMG] = useState(10 * level);
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
    let ceiling = getMonsterCount();
    return Math.floor(Math.random() * ceiling);
  }

  let currentMonster = monsters[monsterRandomiser()];

  useEffect(() => {
    setMonsterHP(currentMonster);
  }, [currentMonster])

  const [newMonster, setNewMonster] = useState({
    name: currentMonster.name,
    hp: currentMonster.hp,
    maxHP: currentMonster.maxHP,
    src: currentMonster.src
  });

  const handleAttack = () => {
      setNewMonster(previousState => {
        let newHp = currentMonster.hp - dmg
        return {...previousState, hp: newHp}
      })
      currentMonster = newMonster;
      console.log(dmg + "DMG");
      console.log("I am in handle attack and the current monstert is {}", currentMonster);
    console.log(getMonsterHP())
    }

  const handleRespawn = () => {
      currentMonster = monsters[monsterRandomiser()];
      setNewMonster(currentMonster);
      console.log("I am in handle respawn and the current monstert is {}", currentMonster);
      setKillCount(killCount + 1);
      console.log(killCount);
      setXP(xp + 10);
      checkXP();
      console.log('RESPAWN GET')
    }

  const checkXP = () => {
    if(xp >= nextLevel){
      handleLevelUp();
    } 
    let toNextLevel = nextLevel - xp;
    console.log(toNextLevel + 'xp to next level.')
  }

  const handleLevelUp = () => {
    setLevel(level + 1);
    setDMG(dmg * 1.1);
    // Rather than reset the XP counter to zero, carry over any excess
    let remainingXP = xp - nextLevel;
    setXP(remainingXP);
    let currentNextLevel = nextLevel;
    let newNextLevel = currentNextLevel * 2;
    setNextLevel(newNextLevel);
    console.log(level);
    console.log(nextLevel);
    console.log('LEVEL UP')
  }

  const setMonsterHP = (currentMonster) => {
    currentMonster.hp -= 10;
  }

  const getMonsterHP = () => {
    return newMonster.hp;
  }

  const getMonsterMaxHP = () => {
    return newMonster.maxHP;
  }
  

  return (
    <div className="game-container">
      <Enemy name={currentMonster.name} src={currentMonster.src} handleAttack={handleAttack} handleRespawn={handleRespawn} hp={getMonsterHP()} maxHP={getMonsterMaxHP()}/>
      {/* <p>{monsters[0].name}</p>
      <img src={monsters[0].src} alt="monstarrr"/>
      <p>HP: {monsters[0].hp}/{monsters[0].maxHP}</p> */}
      <h1>Lv.{level}</h1>
      <h2>Kill Count: {killCount}</h2>
      <button onClick={handleLevelUp}>LEVEL UP</button>
      <button onClick={handleRespawn}>RESPAWN</button>
    </div>
  );
}

export default App;

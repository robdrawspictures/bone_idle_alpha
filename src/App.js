import React, {useState, useEffect} from 'react';
import Assets from './components/Assets';
import Enemy from './components/Enemy';
// import './App.css';

function App() {

  const [level, setLevel] = useState(1);
  const [lambentOrb, setLambentOrb] = useState(0);
  const [radiantOrb, setRadiantOrb] = useState(0);
  const [dmg, setDMG] = useState(10 * (level + radiantOrb));
  const [critDMG, setCritDMG] = useState(2);
  const [critChance, setCritChance] = useState(9);
  const [xp, setXP] = useState(0);
  const [nextLevel, setNextLevel] = useState(100);
  const [killCount, setKillCount] = useState(0);
  const [bossFight, setBossFight] = useState(false);
  
  let monsters = [
    {"name": "Slime", "hp": 20, "maxHP": 20, "src": Assets.Images.Slime},
    {"name": "Mushaboom", "hp": 80, "maxHP": 80, "src": Assets.Images.Mushaboom},
    {"name": "Skeleton", "hp": 20, "maxHP": 20, "src": Assets.Images.Skeleton},
    {"name": "Mimic", "hp": 90, "maxHP": 90, "src": Assets.Images.Mimic},
    {"name": "Unborn", "hp": 40, "maxHP": 40, "src": Assets.Images.Unborn},
    {"name": "Oni", "hp": 60, "maxHP": 60, "src": Assets.Images.Oni},
    {"name": "Doll", "hp": 40, "maxHP": 40, "src": Assets.Images.Doll},
    {"name": "Shambler", "hp": 80, "maxHP": 80, "src": Assets.Images.Shambler},
    {"name": "Screamer", "hp": 70, "maxHP": 70, "src": Assets.Images.Screamer},
    {"name": "Tonberry", "hp": 90, "maxHP": 90, "src": Assets.Images.Tonberry}
  ]

  let bosses = [
    {"name": "Rare Pepe", "hp": 100, "maxHP": 100, "src": Assets.Images.Pepe}
  ]

  const getMonsterCount = () => {
    return monsters.length;
  }

  const monsterRandomiser = () => {
    let ceiling = getMonsterCount();
    return Math.floor(Math.random() * ceiling);
  }

  const getCritRoll = () => {
    return Math.floor(Math.random() * critChance);
  }

  let currentMonster = monsters[monsterRandomiser()];

  useEffect(() => {
    setMonsterHP(currentMonster);
    checkHP(currentMonster);
  }, [currentMonster])

  const [newMonster, setNewMonster] = useState({
    name: currentMonster.name,
    hp: currentMonster.hp,
    maxHP: currentMonster.maxHP,
    src: currentMonster.src
  });

  const handleAttack = () => {
    let critRoll = getCritRoll();
    let critHit = dmg * critDMG;
    if(critRoll === 0 || critRoll === 1 || critRoll === 2){
      setNewMonster(previousState => {
        let newHp = currentMonster.hp - critHit
        return {...previousState, hp: newHp}
      })
      currentMonster = newMonster;
      console.log(critHit + "CRIT");
    }
      setNewMonster(previousState => {
        let newHp = currentMonster.hp - dmg
        return {...previousState, hp: newHp}
      })
      currentMonster = newMonster;
      console.log(dmg + "DMG");
      // console.log("I am in handle attack and the current monstert is {}", currentMonster);
    }

  const handleRespawn = () => {
      if(killCount === 5){
        setNewMonster(bosses[0]);
        setKillCount(0);
        setBossFight(true);
      } else {
      currentMonster = monsters[monsterRandomiser()];
      setNewMonster(currentMonster);
      // console.log("I am in handle respawn and the current monstert is {}", currentMonster);
      setKillCount(killCount + 1);
    }
      console.log(killCount);
      setXP(xp + (10 * (1 + xpModifier())));
      checkXP();
      if(bossFight){
        setLambentOrb(lambentOrb + 1);
        setBossFight(false);
      }
      // console.log('RESPAWN GET')
    }

  const checkXP = () => {
    if(xp >= nextLevel){
      handleLevelUp();
    } 
  }

  const checkHP = (currentMonster) => {
    if(currentMonster.hp <= 0){
      handleRespawn();
    }
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

  const getMonsterName = () => {
    return newMonster.name;
  }

  const getMonsterSRC = () => {
    return newMonster.src
  }

  const calculateNextLevel = () => {
    if (nextLevel - xp >= 0){
    return nextLevel - xp;
    }
    return 0;
  }

  const xpModifier = () => {
    if(level === 1){
      return 0;
    }
    return level / 10;
  }

  const handleAscension = () => {
    setLevel(1);
    setXP(0);
    setNextLevel(100);
    let newRadiantOrb = radiantOrb + lambentOrb;
    setRadiantOrb(newRadiantOrb);
    setLambentOrb(0);
  }

  const handleCritChanceUpgrade = () => {
    if(critChance > 2){
      setCritChance(critChance - 1);
    }
  }

  const handleCritDMGUpgrade = () => {
    if(critDMG < 10){
      setCritDMG(critDMG + 1);
    }
  }
  

  return (
    <div className="game-container">
      <div className='game-window'>
        <div className="enemy-container">
        <Enemy name={getMonsterName()} src={getMonsterSRC()} handleAttack={handleAttack} handleRespawn={handleRespawn} hp={getMonsterHP()} maxHP={getMonsterMaxHP()}/>
        {/* <p>{monsters[0].name}</p>
        <img src={monsters[0].src} alt="monstarrr"/>
        <p>HP: {monsters[0].hp}/{monsters[0].maxHP}</p> */}
        </div>
        <div className='stat-container'>
          <h1>---Stats---</h1>
          <h2>Lv.{level}</h2>
          <h3>Current XP: {xp}</h3>
          <h3>To Next Level: {calculateNextLevel()}</h3>
          <div className='img-text-pair'><img src={Assets.Icons.Skull} alt="skull"/><h3>Kill Count: {killCount}</h3></div>
          <div className='img-text-pair'><img src={Assets.Icons.Lambent} alt="lambent"/><h4>Lambent Orbs: {lambentOrb}</h4></div>
          <div className='img-text-pair'><img src={Assets.Icons.Radiant} alt="radiant"/><h4>Radiant Orbs: {radiantOrb}</h4></div>
        </div>
      </div>
      <div className='button-container'>
        <button onClick={handleLevelUp}>LEVEL UP</button>
        <button onClick={handleRespawn}>RESPAWN</button>
        <button onClick={handleAscension}>ASCEND</button>
        <button onClick={handleCritChanceUpgrade}>Crit % UP</button>
        <button onClick={handleCritDMGUpgrade}>Crit DMG UP</button>
      </div>
    </div>
  );
}

export default App;

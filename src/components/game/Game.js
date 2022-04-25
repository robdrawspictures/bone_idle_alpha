import React, {useState, useEffect} from 'react';
import Assets from '../Assets';
import Enemy from './Enemy';

function Game({enemies}) {

    const [level, setLevel] = useState(1);
    const [lambentOrb, setLambentOrb] = useState(0);
    const [radiantOrb, setRadiantOrb] = useState(0);
    const [dmg, setDMG] = useState(10 * (level + radiantOrb));
    const [critDMG, setCritDMG] = useState(2);
    const [critChance, setCritChance] = useState(9);
    const [dps, setDPS] = useState(true);
    const [xp, setXP] = useState(0);
    const [nextLevel, setNextLevel] = useState(100);
    const [killCount, setKillCount] = useState(0);
    const [bossFight, setBossFight] = useState(false);
    const [mute, setMute] = useState(false);
    const [music, setMusic] = useState(false);

    //ACHIEVEMENTS
    const [totalKills, setTotalKills] = useState(0);
    const [killsTrophy, setKillsTrophy] = useState(false);
    const [ascensionCount, setAscensionCount] = useState(0);
    const [ascensionTrophy, setAscensionTrophy] = useState(false);
    const [ascensionTotalTrophy, setAscensionTotalTrophy] = useState(false);

    useEffect(() => {
        if(music){
            Assets.BGM.BGM.play();
        }
    }, [music])

    // useEffect(() => {
    //         let dpsAttack = handleDPS(() => {
    //         setMonsterHP();
    //         }, 1000);   
        
    //         if(dps){
    //             dpsAttack();}
    // }, [dps])

    const monsterFilter = enemies.filter(enemy => enemy.type === "MONSTER");

    const bossFilter = enemies.filter(enemy => enemy.type === "BOSS");

    const getMonsterCount = () => {
        return monsterFilter.length;
    }

    const getBossCount = () => {
        return bossFilter.length;
    }

    const bossRandomiser = () => {
        let ceiling = getBossCount();
        return Math.floor(Math.random() * ceiling);
    }

    const monsterRandomiser = () => {
        let ceiling = getMonsterCount();
        return Math.floor(Math.random() * ceiling);
    }

    const getCritRoll = () => {
        return Math.floor(Math.random() * critChance);
    }

    let currentMonster = monsterFilter[monsterRandomiser()];

    useEffect(() => {
        setDMG(10 * (level + radiantOrb))
    }, [level, radiantOrb])

    const [newMonster, setNewMonster] = useState({
        name: currentMonster.name,
        hp: currentMonster.hp,
        maxHP: currentMonster.maxHP
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
        } else{
            setNewMonster(previousState => {
            let newHp = currentMonster.hp - dmg
            return {...previousState, hp: newHp}
            })
            currentMonster = newMonster;
            console.log(dmg + "DMG");
        }
        if(mute === false){
        Assets.SFX.AttackFX.play();
        }

    }

    const handleRespawn = () => {
        if(killCount === 5){
            setNewMonster(bossFilter[bossRandomiser()]);
            setKillCount(0);
            setTotalKills(totalKills + 1);
            setBossFight(true);
        } else {
        currentMonster = monsterFilter[monsterRandomiser()];
        setNewMonster(currentMonster);
        setKillCount(killCount + 1);
        setTotalKills(totalKills + 1);
        }
        setXP(xp + (10 * (1 + xpModifier())));
        checkXP();
        if(bossFight){
            setLambentOrb(lambentOrb + 1);
            setBossFight(false);
        }
        if(mute === false){
        Assets.SFX.DeathFX.play();
        }
        checkTotalKills();
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
        setDMG(10 * (level + radiantOrb));
        // Rather than reset the XP counter to zero, carry over any excess
        let remainingXP = xp - nextLevel;
        if(remainingXP > 0){
        setXP(remainingXP)
        } else{
            setXP(0)
        }
        let currentNextLevel = nextLevel;
        let newNextLevel = currentNextLevel * 2;
        setNextLevel(newNextLevel);
        console.log('LEVEL UP')
        Assets.SFX.ClickFX.play();
    }

    const setMonsterHP = (currentMonster) => {
        currentMonster.hp -= 1;
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
        return Assets.Images[newMonster.name]
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
        setAscensionCount(ascensionCount + 1);
        checkAscension();
        Assets.SFX.ClickFX.play();
    }

    const handleCritChanceUpgrade = () => {
        if(critChance > 2){
        setCritChance(critChance - 1);
        Assets.SFX.ClickFX.play();
        }
    }

    const handleCritDMGUpgrade = () => {
        if(critDMG < 10){
        setCritDMG(critDMG + 1);
        Assets.SFX.ClickFX.play();
        }
    }

    const handleMute = () => {
        if(mute){
        setMute(false)
        } else {
        setMute(true)
        }
    }

    const handleMusic = () => {
        if(music){
            Assets.BGM.BGM.pause();
            setMusic(false);
        } else{
            Assets.BGM.BGM.play();
            setMusic(true);
        }
    }

    const checkTotalKills = () => {
        if(totalKills >= 10){
            setKillsTrophy(true);
        }
    }

    const checkAscension = () => {
        if(ascensionCount >= 1){
            setAscensionTrophy(true);
        }
        if (ascensionCount >= 10){
            setAscensionTotalTrophy(true);
        }
        console.log(ascensionCount);
    }

    

    return (
        <div className="game-container">
        <div className='game-window'>
            <div className="enemy-container">
            <Enemy name={getMonsterName()} src={getMonsterSRC() ? getMonsterSRC() : Assets.Images.Corrupt} handleAttack={handleAttack} handleRespawn={handleRespawn} hp={getMonsterHP()} maxHP={getMonsterMaxHP()}/>
            </div>
            <div className='stat-container'>
                <h3>---Stats---</h3>
                <h3>Lv.{level}</h3>
                <h4>Current XP: {xp}</h4>
                <h4>To Next Level: {calculateNextLevel()}</h4>
                <div className='img-text-pair'><img src={Assets.Icons.Skull} alt="skull"/><h4>Kill Count: {killCount}</h4></div>
                <div className='img-text-pair'><img src={Assets.Icons.RedSkull} alt="red-skull"/><h4>Total Kills: {totalKills}</h4></div>
                <div className='img-text-pair'><img src={Assets.Icons.Lambent} alt="lambent"/><h4>Lambent Orbs: {lambentOrb}</h4></div>
                <div className='img-text-pair'><img src={Assets.Icons.Radiant} alt="radiant"/><h4>Radiant Orbs: {radiantOrb}</h4></div>
            </div>
            <div className="trophy-container">
                <h3>--Trophies--</h3>
                <div className='trophies'>
                    <div title="Fledgling Killer" className='trophy'>{killsTrophy ? "✅" : "❌"}</div>
                    <div title="First Ascension" className='trophy'>{ascensionTrophy ? "✅" : "❌"}</div>
                    <div title="Adept Ascender" className='trophy'>{ascensionTotalTrophy ? "✅" : "❌"}</div>
                </div>
            </div>
        </div>
        <div className='button-container'>
            <button title="Raise player level by 1." onClick={handleLevelUp}>LEVEL UP</button>
            <button title="Kill current enemy and spawn another at random." onClick={handleRespawn}>RESPAWN</button>
            <button title="Reset progress and convert Lambent Orbs into Radiant." onClick={handleAscension}>ASCEND</button>
            <button title="Increase crit chance by 10% (Max 70%)." onClick={handleCritChanceUpgrade}>Crit % UP</button>
            <button title="Increase crit damage multiplier by 1." onClick={handleCritDMGUpgrade}>Crit DMG UP</button>
            <button title="Mute sound effects." onClick={handleMute}>{mute ? "Unmute" : "Mute"}</button>
            <button title="Mute music." onClick={handleMusic}>{music ? "🔈" : "🔇"}</button>
        </div>
        </div>
    );
    }

    export default Game;

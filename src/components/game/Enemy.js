function Enemy(props){

    function handleAttack(){
        if(props.hp > 0){
            props.handleAttack();
            // console.log("I am in Enemy and I am handling attack")
            // console.log("My hp is, {}", props.hp)
        } else {
            props.handleRespawn();
            // console.log('RESPAWN A GO GO BABY')
        }
    }

    return (
        <div className="enemy">
            <h2>{props.name}</h2>
            <img className="enemy" src={props.src} alt="monster" onClick={() => handleAttack()}/>
            <h3>HP: {props.hp}/{props.maxHP}</h3>
        </div>
    )

}

export default Enemy;
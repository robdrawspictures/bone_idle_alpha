function Enemy(props, handleAttack, handleRespawn){

    // function handleAttack(){
    //     if(props.hp > 0){
    //         props.handleAttack();
    //         console.log("I am in Enemy and I am handling attack")
    //         console.log("My hp is, {}", props.hp)
    //     } else {
    //         props.handleRespawn();
    //     }
    // }

    return (
        <div className="enemy-container">
            <p>{props.name}</p>
            <img className="enemy" src={props.src} alt="monster" onClick={() => handleAttack()}/>
            <p>HP: {props.hp}/{props.maxHP}</p>
        </div>
    )

}

export default Enemy;
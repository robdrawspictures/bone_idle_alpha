import React, {useState, useEffect} from "react";

const EnemyForm = ({enemy, onCreate}) => {

    const [stateEnemy, setStateEnemy] = useState({
        name: "",
        type: "",
        hp: 0,
        bio: "" 
    })

    useEffect(() => {
        if(!enemy){
            let existingEnemy = {...enemy}
            setStateEnemy(existingEnemy)
        }
    }, [enemy])

    let heading = "";
    if(!enemy){
        heading = "Create New Monster";
    } else {
        heading = "Edit" + enemy.name;
    }

    const handleChange = (e) => {
        let propertyName = e.target.name;
        let copiedEnemy = {...stateEnemy};
        copiedEnemy[propertyName] = e.target.value;
        setStateEnemy(copiedEnemy);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(stateEnemy);
    }

    return(
        <>
            <div className="enemy-form-container">
                <h3>{heading}</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateEnemy.name}/>
                    <input type="number" placeholder="HP" name="hp" onChange={handleChange} value={stateEnemy.hp}/>
                    <select name="type" onChange={handleChange} defaultValue ={stateEnemy.type || "select-type"}>
                        <option disabled value="select-type">Select Type</option>
                        <option value={stateEnemy.type}>BOSS</option>
                        <option value={stateEnemy.type}>MONSTER</option>
                    </select>
                    <input type="text" placeholder="Enter a short description" name="bio" onChange={handleChange} value={stateEnemy.bio}/>
                    <button type="submit">Add Monster</button>
                </form>
            </div>
        </>
    )
}

export default EnemyForm;
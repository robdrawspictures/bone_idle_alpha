import React, {useState, useEffect} from "react";
import "../../Form.css"

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
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Name" name="name" onChange={handleChange} value={stateEnemy.name}/>
                    <label htmlFor="hp">HP</label>
                    <input id="hp" type="number" placeholder="HP" name="hp" onChange={handleChange} value={stateEnemy.hp}/>
                    <label htmlFor="type">Type</label>
                    <select id="type" name="type" onChange={handleChange} defaultValue ={stateEnemy.type || "select-type"}>
                        <option disabled value="select-type">Select Type</option>
                        <option value={stateEnemy.type}>BOSS</option>
                        <option value={stateEnemy.type}>MONSTER</option>
                    </select>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" type="text" placeholder="Enter a short description" name="bio" onChange={handleChange} value={stateEnemy.bio}/>
                    <button type="submit">Save Monster</button>
                </form>
            </div>
        </>
    )
}

export default EnemyForm;
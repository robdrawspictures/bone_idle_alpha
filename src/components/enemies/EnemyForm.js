import React, {useState} from "react";

const EnemyForm = ({onCreate}) => {

    const [stateEnemy, setStateEnemy] = useState({
        name: "",
        type: null,
        hp: 0,
        bio: "" 
    })

    const handleChange = (e) => {
        let propertyName = e.target.name;
        let copiedEnemy = {...stateEnemy};
        copiedEnemy[propertyName] = e.target.value;
        setStateEnemy(copiedEnemy);
        console.log(stateEnemy);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(stateEnemy);
        onCreate(stateEnemy);
    }

    return(
        <>
            <div className="enemy-form-container">
                <h3>Create A New Monster</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="name" onChange={handleChange} value={stateEnemy.name}/>
                    <input type="number" placeholder="HP" name="hp" onChange={handleChange} value={stateEnemy.hp}/>
                    <select name="type" onChange={handleChange} defaultValue ="select-type">
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
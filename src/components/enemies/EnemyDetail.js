import React, { useState } from "react";
import {Link, useParams} from 'react-router-dom';
import Assets from "../Assets";

const EnemyDetail = ({enemies, onEdit}) => {

    const params = useParams();
    const [edit, setEdit] = useState(false);
    const [bio, setBio] = useState({
        bio: ""
    })

    const findEnemyById = (id) => {
        return enemies.find((enemy) =>{
          return enemy.id === parseInt(id);
        })
      }

    let enemy = findEnemyById(params.id);

    if(!enemy){
        return<p>Loading...</p>
    }

    const backURL = "/bestiary";

    const handleEdit = (e) => {
        e.preventDefault();
        onEdit(bio, enemy);
        setEdit();
    }

    const handleChange = (e) => {
        let propertyName = e.target.name;
        let updatedBio = {...bio};
        updatedBio[propertyName] = e.target.value;
        setBio(updatedBio);
    }

    return(
        <div className="enemy-detail">
            <h1>{enemy.name}</h1>
            <div className="enemy-detail-container">
                <div className="enemy-detail-img">
                    <img src={Assets.Images[enemy.name] ? Assets.Images[enemy.name] : Assets.Images.Corrupt} alt="enemy"/>
                </div>
                <div className="enemy-detail-info">
                    <div className="enemy-detail-stats">
                        <h4>No.{enemy.id}</h4>
                        <h4>Base Hp: {enemy.hp}</h4>
                        <h4>Type: {enemy.type}</h4>
                    </div>
                    <hr/>
                    <div className="enemy-detail-bio">
                        {edit ? <textarea value={bio.bio} rows="4" name="bio" columns="9" onChange={handleChange}/> : <h4>{enemy.bio}</h4>}
                        {edit ? <button type="submit" onClick={handleEdit}>Save</button> : <button onClick={setEdit}>Edit Bio</button>}
                    </div>
                </div>
            </div>
            <Link to={backURL}><button>Back to Bestiary</button></Link>
        </div>
    )

}

export default EnemyDetail;

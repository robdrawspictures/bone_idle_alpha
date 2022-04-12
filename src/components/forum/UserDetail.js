import React, { useState } from "react";
import {Link, useParams} from 'react-router-dom';
import Assets from "../Assets";

const UserDetail = ({users, onEdit}) => {

    const params = useParams();
    const [edit, setEdit] = useState(false);
    const [tag, setTag] = useState({
        "tag": ""
    })

    const findUserByID = (id) => {
        return users.find((user) =>{
          return user.id === parseInt(id);
        })
      }

    let user = findUserByID(params.id);
    

    if(!user){
        return<p>Loading...</p>
    }

    

    const backURL = "/users";

    const handleEdit = (e) => {
        e.preventDefault();
        user["tag"] = tag.tag; 
        onEdit(user);
        setEdit();
    }

    const handleChange = (e) => {
        let propertyName = e.target.name;
        let updatedTag = {...tag};
        updatedTag[propertyName] = e.target.value;
        setTag(updatedTag);
    }

    return(
        <div className="enemy-detail">
            <h1>{user.username}</h1>
            <div className="enemy-detail-container">
                <div className="enemy-detail-img">
                <img src={Assets.Avatars[user.username] ? Assets.Avatars[user.username] : Assets.Images.BitCorrupt} alt="user"/>
                <p className="admin-status">{user.admin ? "Admin" : null}</p>
                </div>
                <div className="enemy-detail-info">
                    <div className="enemy-detail-stats">
                        <h4>Lv{user.level}</h4>
                        <h4>Kills: {user.kills}</h4>
                        <h4>Radiant Orbs: {user.radiant}</h4>
                        <h4>Post Count: {user.postCount}</h4>
                    </div>
                    <hr/>
                    <div className="enemy-detail-bio">
                        {edit ? <textarea value={tag.tag} rows="4" name="tag" columns="9" onChange={handleChange}/> : <h4>{user.tag}</h4>}
                        {edit ? <button type="submit" onClick={handleEdit}>Save</button> : <button onClick={setEdit}>Edit Tag</button>}
                    </div>
                </div>
            </div>
            <Link to={backURL}><button>Back to Users</button></Link>
        </div>
    )

}

export default UserDetail;

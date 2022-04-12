import React, {Fragment} from 'react';
import Assets from "../Assets.js";
import { Link } from 'react-router-dom';

const User = ({user, onDelete}) => {

  if (!user){
    return <p>"Loading..."</p>
  }

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(user);
  }



  const userURL = "/users/" + user.id;

  return (
    <Fragment>
    <img src={Assets.Avatars[user.username] ? Assets.Avatars[user.username] : Assets.Images.BitCorrupt} width="125" alt="user"/>
    <p>{user.username}</p>
    <p className="admin-status">{user.admin ? "Admin" : null}</p>
    <Link to={userURL}><button type="button">View</button></Link>
    <button type="button" onClick={handleDelete}>Delete</button>
    </Fragment>
  )
}

export default User;

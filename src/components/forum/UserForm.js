import React, {useState, useEffect} from "react";
import "../../Form.css"

const EnemyForm = ({user, onCreateAccount}) => {

    const [stateUser, setStateUser] = useState({
        username: "",
        tag: "",
        admin: false
    })

    useEffect(() => {
        if(!user){
            let existingUser = {...user}
            setStateUser(existingUser)
        }
    }, [user])

    let heading = "";
    if(!user){
        heading = "Create New Account";
    } else {
        heading = "Edit" + user.username + "Details";
    }

    const handleChange = (e) => {
        let propertyName = e.target.name;
        let copiedUser = {...stateUser};
        copiedUser[propertyName] = e.target.value;
        setStateUser(copiedUser);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateAccount(stateUser);
    }

    return(
        <>
            <div className="enemy-form-container">
                <h3>{heading}</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Name" name="username" onChange={handleChange} value={stateUser.username}/>
                    <label htmlFor="tag">Tag</label>
                    <textarea id="tag" type="text" placeholder="Will appear under avatar on posts." name="tag" onChange={handleChange} value={stateUser.tag}/>
                    <label htmlFor="admin">Do you do it for free?</label>
                    <input id="admin" type="checkbox" onChange={handleChange} value={stateUser.admin}/>
                    <label htmlFor="terms">Do you accept nothing on this site is my fault?</label>
                    <input type="checkbox" required={true}/>

                    <button type="submit">Create Account</button>
                </form>
            </div>
        </>
    )
}

export default EnemyForm;
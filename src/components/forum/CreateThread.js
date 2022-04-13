import React, {useState, useEffect} from "react";
import "../../Form.css"

const CreateThread = ({users, onCreateThread}) => {

    const [creator, setCreator] = useState();
    const [stateThread, setStateThread] = useState({
        title: "",
        creator: {},
    })

    const handleCreator = (e) => {
        const index = parseInt(e.target.value);
        const selectedUser = users[index];
        let copiedThread = {...stateThread};
        copiedThread["creator"] = selectedUser;
        setStateThread(copiedThread);

    }

    const handleChange = (e) => {
        let propertyName = e.target.name;
        let copiedThread = {...stateThread};
        copiedThread[propertyName] = e.target.value;
        setStateThread(copiedThread);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateThread(stateThread);
    }

    const userOptions = users.map((user, index) => {
        return <option key={index} value={index}>{user.username}</option>
    })

    return(
        <>
            <div className="thread-form-container">
                <h3>Create Thread</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" placeholder="Add a title." name="title" onChange={handleChange} value={stateThread.title}/>
                    <label htmlFor="user">User</label>
                    <select id="user" name="user" onChange={handleCreator} defaultValue ="select-user">
                    <option disabled value="select-user">User</option>
                    {userOptions}
                    </select>

                    <button type="submit">Create Thread</button>
                </form>
            </div>
        </>
    )
}

export default CreateThread;
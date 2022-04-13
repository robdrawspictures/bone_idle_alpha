import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "../../Form.css"

const CreatePost = ({users, threads, onCreatePost}) => {



    const params = useParams();
    const [statePost, setStatePost] = useState({
        user: {},
        body: "",
        thread: {},
    })

    useEffect(() => {
        let currentThread = findThreadByID(params.id)
        let copiedPost = {...statePost};
        copiedPost["thread"] = currentThread;
        setStatePost(copiedPost);
        console.log(statePost);
    }, [])


    const handleCreator = (e) => {
        const index = parseInt(e.target.value);
        const selectedUser = users[index];
        let copiedPost = {...statePost};
        copiedPost["user"] = selectedUser;
        setStatePost(copiedPost);
    }

    const findThreadByID = (id) => {
        return threads.find((thread) => {
            return thread.id === parseInt(id);
        })
    }

    const handleChange = (e) => {
        let propertyName = e.target.name;
        let copiedPost = {...statePost};
        copiedPost[propertyName] = e.target.value;
        setStatePost(copiedPost);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreatePost(statePost);
    }

    const userOptions = users.map((user, index) => {
        return <option key={index} value={index}>{user.username}</option>
    })

    return(
        <>
            <div className="post-form-container">
                <h3>Create Post</h3>
                <form onSubmit={handleSubmit}>
                    <textarea id="body" type="text" name="body" columns="50" rows="10" onChange={handleChange} value={statePost.body}/>
                    <label htmlFor="user">User</label>
                    <select id="user" name="user" onChange={handleCreator} defaultValue ="select-user">
                    <option disabled value="select-user">User</option>
                    {userOptions}
                    </select>
                    {/* <input name="thread" defaultValue={findThreadByID(params.id)}/> */}

                    <button type="submit">Post</button>
                </form>
            </div>
        </>
    )
}

export default CreatePost;
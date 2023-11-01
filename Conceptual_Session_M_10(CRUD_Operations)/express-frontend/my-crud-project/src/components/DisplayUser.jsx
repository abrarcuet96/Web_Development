import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const DisplayUser = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    const handleDelete = id => {
        const URL = `http://localhost:5000/users/${id}`;
        fetch(URL, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Data deleted successfully');
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
                console.log(data);
            })
    }

    return (
        <div className="text-center text-3xl">
            <h2>Users:</h2>
            {
                users.map(user =>
                (<div className="flex gap-2" key={users._id}>
                    <h1>{user.name}</h1>
                    <button onClick={() => handleDelete(user._id)} className="btn" type="submit">delete</button>
                    <Link to={`/users/${user._id}`}>
                        <button className="btn">update</button>
                    </Link>

                </div>))
            }
        </div>
    );
};

export default DisplayUser;
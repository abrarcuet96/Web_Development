import { useLoaderData } from "react-router-dom";

const UpdateData = () => {
    const loadedUsers = useLoaderData();
    const handleUpdateUser = e => {
        e.preventDefault(); // to prevent page reloading.
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const myData = { name, email, password };
        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Data updated successfully');
                }
                console.log(data)
            })
    }
    return (
        <div className="h-[100vh] flex items-center justify-center bg-teal-950">
            <div className="text-center bg-teal-600 p-5 rounded-xl shadow-xl">
                <h2 className="text-6xl font-bold mb-2 text-white">User</h2>
                <form onSubmit={handleUpdateUser}>
                    <input className="border-2 mb-2 w-[300px] p-2 rounded-lg" type="text" name="name" placeholder="name" defaultValue={loadedUsers.name} />
                    <br />
                    <input className="border-2 mb-2 w-[300px] p-2 rounded-lg" type="email" name="email" placeholder="email" defaultValue={loadedUsers.email}/>
                    <br />
                    <input className="border-2 mb-2 w-[300px] p-2 rounded-lg" type="password" name="password" placeholder="password" defaultValue={loadedUsers.password} />
                    <br />
                    <button className="btn block w-full mb-2 text-2xl" type="submit">Submit</button>


                </form>
            </div>
        </div>
    );
};

export default UpdateData;
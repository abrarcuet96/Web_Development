import { Link } from "react-router-dom";

const PostUser = () => {
    const handlePostUser = e => {
        e.preventDefault(); // to prevent page reloading.
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const myData = { name, email, password };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Data posted successfully');
                }
                console.log(data)
            })
    }
    return (
        <div className="h-[100vh] flex items-center justify-center bg-teal-950">
            <div className="text-center bg-teal-600 p-5 rounded-xl shadow-xl">
                <h2 className="text-6xl font-bold mb-2 text-white">User</h2>
                <form onSubmit={handlePostUser}>
                    <input className="border-2 mb-2 w-[300px] p-2 rounded-lg" type="text" name="name" placeholder="name" />
                    <br />
                    <input className="border-2 mb-2 w-[300px] p-2 rounded-lg" type="email" name="email" placeholder="email" />
                    <br />
                    <input className="border-2 mb-2 w-[300px] p-2 rounded-lg" type="password" name="password" placeholder="password" />
                    <br />
                    <button className="btn block w-full mb-2 text-2xl" type="submit">Submit</button>


                </form>
                <button className="btn block w-full mb-2">
                    <Link to='http://localhost:5000/users'>Go To Users API</Link>
                </button>
                <button className="btn block w-full">
                    <Link to='http://localhost:5173/users'>Go To Users</Link>
                </button>
            </div>
        </div>
    );
};

export default PostUser;
import { useState } from "react";

const StateFullForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState('abrar');
    const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name,email,password);
        if(password.length<6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('');
        }
    }
    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleNameChange}
                    type="text" name="name" id="" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" id="" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFullForm;
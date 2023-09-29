import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user= useLoaderData();
    const {userId}= useParams();
    console.log(userId);
    const navigate= useNavigate();
    const {name, website}=user;

    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>website: {website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;
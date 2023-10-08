import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";


const Home = () => {
    const authInfo= useContext(AuthContext);
    return (
        <div>
            <h2 className="text-3xl">This Is Home: {authInfo.name}</h2>
        </div>
    );
};

export default Home;
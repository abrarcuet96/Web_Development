import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation= useNavigate();
    return (
        <div>
            <Header></Header>
            {
                navigation.state === 'loading'? <p>Loading...</p>:<Outlet></Outlet>
            }
            {/* <h2>This is the home component</h2>
            <Outlet></Outlet> */}
            
            <Footer></Footer>
        </div>
    );
};

export default Home;
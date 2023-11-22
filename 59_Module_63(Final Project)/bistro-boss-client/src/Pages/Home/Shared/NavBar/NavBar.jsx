import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../../Hooks/useCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart]= useCart();
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    const navLinks = <div className="flex text-center justify-center items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        {
            user ? <li>
                <Link to='/dashboard/cart'>
                    <div className="flex text-center justify-center items-center">
                        <FaShoppingCart className="mr-2"></FaShoppingCart>
                        <p>+{cart.length}</p>
                    </div>
                </Link>
            </li> : ''
        }
    </div>
    return (
        <div className="navbar fixed z-10 bg-opacity-80 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="text-3xl font-bold">Bistro-Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="flex gap-2 text-center justify-center items-center">
                            <p>{user?.displayName}</p>
                            <img className="w-[30px] rounded-full" src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut}>LogOut</button>
                        </div>
                    </> : <>
                        <button><Link to="/login" >Login</Link></button>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;
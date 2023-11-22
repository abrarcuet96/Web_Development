import { FaBookmark, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaStar, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    // TODO: get isAdmin value from the database.
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-screen bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems"><FaList></FaList>Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageBookings"><FaBookmark></FaBookmark>Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users"><FaUsers></FaUsers>All Users</NavLink>
                            </li>
                        </> : <>
                            <li>
                                <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart({cart.length})</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/review"><FaStar></FaStar>Add a review</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings"><FaBookmark></FaBookmark>My Bookings</NavLink>
                            </li>
                        </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaSearch></FaSearch>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact"><FaVoicemail></FaVoicemail>Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
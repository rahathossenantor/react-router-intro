import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const location = useLocation();
    console.log(location);
    
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
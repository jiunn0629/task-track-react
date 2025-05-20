import { Outlet } from 'react-router-dom';
import Navbar from "../Navbar.tsx";

const Layout=() =>{

    return (
        <div className="w-screen h-screen bg-base-200">
            <Navbar />

            <div className="p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
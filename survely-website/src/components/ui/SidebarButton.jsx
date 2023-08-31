/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

export default function SidebarButton({ children, to, icon }) {
    const location = useLocation();
    const currentPath = location.pathname;

    console.log(currentPath)

    return (
        <Link
            className={`flex items-center gap-3 ${currentPath === to ? "bg-primary" : "hover:bg-primary"} transition-all duration-300 p-1 rounded-lg`}
            to={to}
        >
            <img src={icon} alt="Sidebar Button" width={18} height={18} />
            {children}
        </Link>
    );
}

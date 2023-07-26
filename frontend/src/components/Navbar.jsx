/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Navbar({ isAuth }) {
    return (
        <header style={{ height: 100 }} className="flex items-center justify-around w-full">
            <Link to="/" className="text-4xl font-bold cursor-pointer">Survely</Link>
            <nav className="flex items-center gap-12 text-lg">
                <Link to="/survey/create" className="hover:text-primary transition-all duration-300">Create Form</Link>
                <Link to="/survey/analytics" className="hover:text-primary transition-all duration-300">Analytics</Link>
                {isAuth ? (
                    <Link to="/auth/login" className="bg-primary px-12 py-3 rounded-lg text-white font-bold select-none hover:shadow-lg transition-all duration-300">
                        Logout
                    </Link>
                ) : (
                    <Link
                        to="/auth/login"
                        className="bg-primary px-12 py-3 rounded-lg text-white font-bold select-none hover:shadow-lg transition-all duration-300"
                    >
                        Login
                    </Link>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
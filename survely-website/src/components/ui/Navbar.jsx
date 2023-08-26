import { Link } from "react-router-dom";

import survelyLogo from "../../../public/survely_logo.png";

export default function Navbar() {
    // TODO: Replace this with the state from useStateContext()
    const isAuth = false;

    return (
        <header style={{ height: 100 }} className="flex items-center justify-around w-full">
            <Link to="/" className="flex items-center gap-8">
                <img className="w-24 h-24" src={survelyLogo} alt="Survely Logo" />
                <h1 className="text-4xl font-bold cursor-pointer">Survely</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-12 text-lg">
                <Link to="/survey/create-form" className="hover:text-primary transition-all duration-300">
                    Create Form
                </Link>
                <Link to="/survey/analytics" className="hover:text-primary transition-all duration-300">
                    Analytics
                </Link>
                {isAuth ? (
                    <Link to="/logout" className="bg-primary px-12 py-3 rounded-lg text-white font-bold select-none hover:shadow-lg transition-all duration-300">
                        Logout
                    </Link>
                ) : (
                    <Link
                        to="/login"
                        className="bg-primary px-12 py-3 rounded-lg text-white font-bold select-none hover:shadow-lg transition-all duration-300"
                    >
                        Login
                    </Link>
                )}
            </nav>
        </header>
    );
}

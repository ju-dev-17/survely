import { useState } from "react";
import { Link } from "react-router-dom";

import survelyLogo from "../../../public/survely_logo.png";
import profile from "../../assets/profile.svg";
import settings from "../../assets/settings-outline.svg";
import logout from "../../assets/log-out-outline.svg";

export default function Navbar() {
    // TODO: Replace this with the state from useStateContext()
    const isAuth = true;
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

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
                    <div className="relative">
                        <button
                            className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent"
                            onClick={() => setDropdownVisibility(!dropdownVisibility)}
                        >
                            <img
                                className="w-full h-full object-cover"
                                src={profile}
                                alt="Profile Picture"
                            />
                        </button>
                        <div
                            className={`absolute -bottom-24 right-0 z-50 rounded-lg bg-accent text-secondary text-sm font-semibold w-full ${dropdownVisibility ? "flex" : "hidden"} flex-col gap-3 px-4 py-3 transition-all duration-300`}
                            style={{ width: 150 }}
                        >
                            <Link className="flex items-center gap-3 border-b border-primary pb-3" to="/settings/profile">
                                <img
                                    src={settings}
                                    alt="Settings"
                                    width={20}
                                    height={20}
                                />
                                Settings
                            </Link>
                            <Link className="flex items-center gap-3" to="/login?logout">
                                <img
                                    src={logout}
                                    alt="Logout"
                                    width={20}
                                    height={20}
                                />
                                Logout
                            </Link>
                        </div>
                    </div>
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

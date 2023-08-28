import { Outlet } from "react-router-dom";

import Navbar from "../components/ui/Navbar.jsx";

export default function MainLayout() {
    return (
        <main className="w-full h-screen bg-background text-text flex flex-col items-center">
            <div className="w-full">
                <Navbar />
            </div>
            <div className="w-full h-5/6 flex flex-col sm:flex-row justify-around p-8 md:p-0">
                <Outlet />
            </div>
        </main>
    );
}

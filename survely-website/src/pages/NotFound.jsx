import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="mb-24 w-full flex flex-col gap-10 justify-center items-center">
            <span className="text-6xl font-bold">404 - Page Not Found</span>
            <Link to="/" className="bg-primary px-6 sm:px-12 py-4 rounded-lg text-center text-white text-lg sm:text-xl font-bold select-none hover:shadow-lg transition-all duration-300">
                Take me home
            </Link>
        </div>
    );
}

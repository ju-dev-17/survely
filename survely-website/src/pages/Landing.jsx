import { Link } from "react-router-dom";

import homeImage from "../assets/home-image.svg";

export default function Landing() {
    return (
        <div className="flex flex-col xl:flex-row items-start sm:items-center gap-14 xl:gap-0">
            <div className="flex flex-col items-center md:items-start gap-10 sm:gap-20 w-full xl:w-1/2 text-center md:text-start">
                <div className="flex flex-col gap-3">
                     <span className="text-4xl sm:text-5xl font-bold">
                        Customize Your Surveys
                     </span>
                    <span className="text-4xl sm:text-5xl font-bold">
                         And Conduct Analyses
                     </span>
                </div>
                <div className="flex flex-col gap-2">
                     <span className="text-xl sm:text-2xl">
                        Choosing between different types of Forms?
                     </span>
                    <span className="text-xl sm:text-2xl">
                        Start now with Survely.
                     </span>
                </div>
                <div className="flex gap-3 flex-col md:flex-row w-full">
                    <Link to="/login" className="bg-primary px-6 sm:px-12 py-4 rounded-lg text-center text-white text-lg sm:text-xl font-bold select-none hover:shadow-lg transition-all duration-300">
                        Get Started
                    </Link>
                    <Link
                        target="_blank"
                        to="https://github.com/ju-dev-17/survely"
                        className="bg-secondary px-6 sm:px-12 py-4 rounded-lg text-center text-white text-lg sm:text-xl font-bold select-none hover:shadow-lg transition-all duration-300"
                    >
                        View Source Code
                    </Link>
                </div>
            </div>
            <div className="w-full xl:w-1/2">
                <img src={homeImage} alt="Home Image" className="w-full" />
            </div>
        </div>
    );
}

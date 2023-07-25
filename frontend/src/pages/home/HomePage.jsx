import Navbar from "../../components/Navbar.jsx";
import {Link} from "react-router-dom";

import homeImage from "../../assets/home-image.svg";

function HomePage() {
    return (
      <main className="bg-background text-text min-h-screen w-full flex flex-col items-center">
          <Navbar isAuth={false} />
          <div className="flex justify-around items-center flex-1 mb-18">
             <div className="flex flex-col gap-20 w-1/2">
                 <div className="flex flex-col gap-3">
                     <span className="text-5xl font-bold">
                        Customize Your Surveys
                     </span>
                     <span className="text-5xl font-bold">
                         And Conduct Analyses
                     </span>
                 </div>
                 <div className="flex flex-col gap-2">
                     <span className="text-2xl">
                        Choosing between different types of Forms?
                     </span>
                     <span className="text-2xl">
                        Start now with Survely.
                     </span>
                 </div>
                 <div className="flex gap-3">
                     <Link to="/auth/login" className="bg-primary px-12 py-4 rounded-lg text-center text-white text-xl font-bold select-none">
                         Get Started
                     </Link>
                     <Link to="/docs" className="bg-secondary px-12 py-4 rounded-lg text-center text-white text-xl font-bold select-none">
                         Docs
                     </Link>
                 </div>
             </div>
             <div className="w-1/2">
                <img src={homeImage} alt="Home Image" className="w-full" />
             </div>
         </div>
      </main>
    );
}

export default HomePage;
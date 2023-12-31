/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import back from "../../assets/chevron-back-outline.svg";

export default function Sidebar({ children, title }) {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-col border-2">
            <div className="flex items-center gap-4 w-full border-b-2 py-3 px-2">
                <img
                    className="cursor-pointer"
                    onClick={() => navigate(-1)}
                    src={back}
                    alt="Back Button"
                    width={18}
                    height={18}
                />
                <h1 className="text-xl font-semibold">{title}</h1>
            </div>
            <div className="flex flex-col px-3">
                {children}
            </div>
        </div>
    );
}

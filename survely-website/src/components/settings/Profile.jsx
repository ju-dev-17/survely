import { useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../ui/Breadcrumb.jsx";
import profile from "../../assets/profile.svg";
import upload from "../../assets/cloud-upload-outline.svg";

export default function Profile() {
    const [profileData, setProfileData] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@survely.com"
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProfileData((prevProfileData) => ({
            ...prevProfileData,
            [name]: value,
        }));
    };

    return (
        <div className="w-full h-full flex flex-col gap-5">
            <Breadcrumb section="Account settings" view="Profile" />
            <h1 className="text-3xl font-semibold">Profile</h1>
            <div className="border-y border-x-0 flex flex-col gap-10 py-8">
                <div className="flex items-center gap-5">
                    <img
                        className="rounded-full"
                        src={profile}
                        alt="Profile Picture"
                        width={55}
                        height={55}
                    />
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold">Profile Picture</span>
                        <div className="flex gap-2">
                            <label htmlFor="upload" className="flex items-center gap-1 bg-accent px-3 p-1 rounded-lg text-center text-white font-semibold select-none cursor-pointer">
                                <img
                                    src={upload}
                                    alt="Upload"
                                    width={20}
                                    height={20}
                                />
                                Upload image
                            </label>
                            <input id="upload" type="file" hidden />
                            <button className="flex items-center gap-1 bg-secondary px-3 p-1 rounded-lg text-center text-white font-semibold select-none">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-accent" htmlFor="firstName">First Name</label>
                            <input
                                id="firstName"
                                className="rounded-lg py-2 px-4 border-2 focus:outline-none w-full"
                                type="text"
                                name="firstName"
                                placeholder={`${profileData.firstName} *`}
                                value={profileData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-accent" htmlFor="lastName">Last Name</label>
                            <input
                                id="lastName"
                                className="rounded-lg py-2 px-4 border-2 focus:outline-none w-full"
                                type="text"
                                name="lastName"
                                placeholder={`${profileData.lastName} *`}
                                value={profileData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label className="text-accent" htmlFor="lastName">Primary E-Mail Address</label>
                        <input
                            id="lastName"
                            className="rounded-lg py-2 px-4 border-2 focus:outline-none w-full"
                            type="text"
                            name="lastName"
                            value={profileData.email}
                            disabled
                        />
                        <Link
                            className="underline text-accent"
                            to="/settings/email"
                        >
                            Change your email address
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

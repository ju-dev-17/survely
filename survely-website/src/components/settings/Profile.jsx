import { useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../ui/Breadcrumb.jsx";
import profile from "../../assets/profile.svg";
import upload from "../../assets/cloud-upload-outline.svg";
import Input from "../ui/Input.jsx";

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
            <div className="border-t flex flex-col gap-10 py-8">
                <div className="flex items-center gap-5">
                    <div className="overflow-hidden border-2 border-accent rounded-full">
                        <img
                            className="object-cover"
                            src={profile}
                            alt="Profile Picture"
                            width={55}
                            height={55}
                        />
                    </div>
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
                            <button className="bg-secondary px-3 p-1 rounded-lg text-center text-white font-semibold select-none">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="flex gap-5">
                        <Input
                            label="First Name"
                            name="firstName"
                            type="text"
                            placeholder={`${profileData.firstName} *`}
                            value={profileData.firstName}
                            onChange={handleChange}
                        />
                        <Input
                            label="Last Name"
                            name="lastName"
                            type="text"
                            placeholder={`${profileData.lastName} *`}
                            value={profileData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <Input
                        label="Primary E-Mail Address"
                        name="email"
                        type="email"
                        placeholder={`${profileData.lastName} *`}
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
    );
}

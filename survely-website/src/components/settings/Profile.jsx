import Breadcrumb from "../ui/Breadcrumb.jsx";
import profile from "../../assets/profile.svg";
import upload from "../../assets/cloud-upload-outline.svg";

export default function Profile() {
    return (
        <div className="w-full h-full flex flex-col gap-5">
            <Breadcrumb section="Account settings" view="Profile" />
            <h1 className="text-3xl font-semibold">Profile</h1>
            <div className="border-t border-x-0 flex flex-col py-8">
                <div className="flex items-center gap-5">
                    <img
                        className="rounded-full"
                        src={profile}
                        alt="Profile Picture"
                        width={64}
                        height={64}
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
            </div>
        </div>
    );
}

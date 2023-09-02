import { useState } from "react";
import Breadcrumb from "../ui/Breadcrumb.jsx";
import PermissionCard from "../ui/PermissionCard.jsx";

export default function Notifications() {
    // Replace this with a recoil state
    const [accountData, setAccountData] = useState({
        notifications: {
            completedSurvey: false,
            expiredSurvey: true
        }
    });

    const handleToggle = (event) => {
        const { name, checked } = event.target;

        setAccountData((prevAccountData) => ({
            ...prevAccountData,
            notifications: {
                ...prevAccountData.notifications,
                [name]: checked
            }
        }));
    };

    return (
        <div className="w-full h-full flex flex-col gap-5">
            <Breadcrumb section="Account settings" view="Notifications" />
            <h1 className="text-3xl font-semibold">Notifications</h1>
            <div className="border-y flex flex-col gap-10 py-8">
                <PermissionCard
                    toggle={accountData.notifications.completedSurvey}
                    handleToggle={handleToggle}
                    name="completedSurvey"
                    title="Completed Survey"
                    description="Get notified everytime a person completed a survey."
                />
                <PermissionCard
                    toggle={accountData.notifications.expiredSurvey}
                    handleToggle={handleToggle}
                    name="expiredSurvey"
                    title="Expired Survey"
                    description="Get notified when the time of your survey is expired."
                />
            </div>
        </div>
    );
}

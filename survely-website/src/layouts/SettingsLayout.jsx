import { Outlet } from "react-router-dom";

import Sidebar from "../components/ui/Sidebar.jsx";
import SidebarSection from "../components/ui/SidebarSection.jsx";
import SidebarButton from "../components/ui/SidebarButton.jsx";
import profile from "../assets/person-outline.svg"
import email from "../assets/mail-outline.svg";
import notifications from "../assets/notifications-outline.svg";

export default function SettingsLayout() {
    return (
        <main className="w-full min-h-screen flex bg-background">
            <div className="w-1/6 h-screen">
                <Sidebar title="Settings">
                    <SidebarSection name="Account">
                        <SidebarButton to="/settings/profile" icon={profile}>
                            Profile
                        </SidebarButton>
                        <SidebarButton to="/settings/email" icon={email}>
                            E-Mail
                        </SidebarButton>
                        <SidebarButton to="/settings/notifications" icon={notifications}>
                            Notifications
                        </SidebarButton>
                    </SidebarSection>
                </Sidebar>
            </div>
            <div className="w-5/6 min-h-screen bg-white px-48 py-5">
                <Outlet />
            </div>
        </main>
    );
}

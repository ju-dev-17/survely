import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Landing from "./pages/Landing.jsx";
import CreateForm from "./pages/CreateForm.jsx";
import Analytics from "./pages/Analytics.jsx";
import SurveyView from "./pages/SurveyView.jsx";
import SettingsLayout from "./layouts/SettingsLayout.jsx";
import Profile from "./components/settings/Profile.jsx";
import Email from "./components/settings/Email.jsx";
import Notifications from "./components/settings/Notifications.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
              path: "*",
              element: <NotFound />
            },
            {
                path: "/",
                element: <Landing />
            },
            {
                path: "/survey/create-form",
                element: <CreateForm />
            },
            {
                path: "/survey/analytics",
                element: <Analytics />
            },
            {
                path: "/survey/analytics/:surveyId",
                element: <SurveyView />
            },
        ]
    },
    {
        path: "/",
        element: <SettingsLayout />,
        children: [
            {
                path: "/settings/profile",
                element: <Profile />
            },
            {
                path: "/settings/email",
                element: <Email />
            },
            {
                path: "/settings/notifications",
                element: <Notifications />
            },
        ]
    }
]);

export default router;
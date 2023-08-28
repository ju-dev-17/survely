import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import Landing from "./pages/Landing.jsx";
import CreateForm from "./pages/CreateForm.jsx";
import Analytics from "./pages/Analytics.jsx";
import SurveyView from "./pages/SurveyView.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
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
            }
        ]
    }
]);

export default router;
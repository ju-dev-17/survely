import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import Landing from "./pages/Landing.jsx";
import CreateForm from "./pages/CreateForm.jsx";

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
            }
        ]
    }
]);

export default router;
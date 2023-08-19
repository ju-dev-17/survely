import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        index: true,
    }
]);

export default router;
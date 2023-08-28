import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import router from "./router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <RecoilRoot>
        <Toaster position="bottom-left" />
        <RouterProvider router={router} />
    </RecoilRoot>,
);

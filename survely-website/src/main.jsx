import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";

import router from "./router.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RecoilRoot>
          <RouterProvider router={router} />
      </RecoilRoot>
  </React.StrictMode>,
);

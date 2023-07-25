import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import CreatePage from "./pages/survey/CreatePage.jsx";
import ViewPage from "./pages/survey/ViewPage.jsx";
import AnalyticsPage from "./pages/survey/AnalyticsPage.jsx";

function App() {
  return (
    <RecoilRoot>
        <Router>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />
                <Route path="/survey/create" element={<CreatePage />} />
                <Route path="/survey/view" element={<ViewPage />} />
                <Route path="/survey/analytics" element={<AnalyticsPage />} />
            </Routes>
        </Router>
    </RecoilRoot>
  );
}

export default App;
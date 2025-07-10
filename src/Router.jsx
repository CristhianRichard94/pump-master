import PumpPage from "./features/pump/pages/PumpPage";
import LoginPage from "./features/login/pages/LoginPage";
import OverviewPage from "./features/overview/pages/OverviewPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route
      path="/overview"
      element={<OverviewPage />}
    />
    <Route
      path="/pump/:pumpId"
      element={<PumpPage />}
    />
  </Routes>
  </BrowserRouter>
)


export default Router;
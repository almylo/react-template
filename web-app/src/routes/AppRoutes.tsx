import React from "react";
import { Route } from "react-router-dom";
import { lazyImport } from "../utils/lazyImport";
const { Home } = lazyImport(() => import("../pages/Home"), "Home");
const { Profile } = lazyImport(() => import("../pages/Profile"), "Profile");

const AppRoutes: React.FC = () => (
  <>
    <Route exact path={`/`} component={Home} />
    <Route exact path={`/profile`} component={Profile} />
  </>
);
export default AppRoutes;

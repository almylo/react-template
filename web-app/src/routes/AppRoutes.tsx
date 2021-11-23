import React from "react";
import { Route } from "react-router-dom";
import { lazyImport } from "../utils/lazyImport";
const { Home } = lazyImport(() => import("../pages/Home"), "Home");
const { Profile } = lazyImport(() => import("../pages/Profile"), "Profile");
const { Contact } = lazyImport(() => import("../pages/Contact"), "Contact");

const AppRoutes: React.FC = () => (
  <>
    <Route exact path={`/`} component={Home} />
    <Route exact path={`/profile`} component={Profile} />
    <Route exact path={`/contact`} component={Contact} />
    
    
    
    
  </>
);
export default AppRoutes;

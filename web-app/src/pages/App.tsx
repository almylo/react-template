import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { Loader } from "../components/elements/Loader";
import CacheBuster from "react-cache-buster";
import { version } from "../../package.json";
import { isProduction, basename } from "../config/config.json";
import { ReactComponent as UISvg } from "../assets/ui/ui.svg";
import ScrollToTop from "../utils/scrollToTop";
import AppRoutes from "../routes/AppRoutes";
import '../styles/main.scss';

function App() {
  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction}
      isVerboseMode={false}
      loadingComponent={<Loader />}
    >
      <BrowserRouter basename={basename}>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Container>
            <Switch>
              <AppRoutes />
            </Switch>
          </Container>
        </Suspense>
        <UISvg />
      </BrowserRouter>
    </CacheBuster>
  );
}

export default App;

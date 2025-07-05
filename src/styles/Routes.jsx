import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import LandingPage from "pages/landing-page";
import ComingSoonPage from "pages/coming-soon";
// Add your imports here

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route
            path="/"
            element={<LandingPage />}
          />
          <Route
            path="/coming-soon"
            element={<ComingSoonPage />}
          />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;

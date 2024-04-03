// React
import React from "react";
import { Routes, Route } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// Store
import { store } from "./store/store";

// Pages
import { HomePage } from "./pages/HomePage"; // TODO: For testing purpose; remove later.
import { StationDetails } from "./pages/StationDetails";

// Components
import { NavPanel } from "./cmps/NavPanel/NavPanel";
import { PlayerPanel } from "./cmps/PlayerPanel/PlayerPanel";

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <main className="main-container p-8">
          <NavPanel />
          <Routes>
            <Route exact={true} element={<HomePage />} path="/" />
            <Route exact={true} element={<StationDetails />} path="/station/:stationId" />
          </Routes>
          <PlayerPanel />
        </main>
      </Router>
    </Provider>
  );
}

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
import { TopBar } from "./cmps/TopBar/TopBar";

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="main-app">
          <NavPanel />
          <main className="main-view overflow-hidden radiused">
            <div className="scrollable-y">
              <TopBar />
              <Routes>
                <Route exact={true} element={<HomePage />} path="/" />
                <Route exact={true} element={<StationDetails />} path="/station/:stationId" />
              </Routes>
            </div>
          </main>
          <PlayerPanel />
        </section>
      </Router>
    </Provider>
  );
}

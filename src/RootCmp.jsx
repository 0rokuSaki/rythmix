import React from "react";
import { Routes, Route } from "react-router";

import routes from "./routes";
import { NavPanel } from "./cmps/NavPanel/NavPanel";
import { PlayerPanel } from "./cmps/PlayerPanel/PlayerPanel";

export function RootCmp() {
  return (
    <main className="main-container p-8">
      <NavPanel />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} exact={true} element={route.component} path={route.path} />
        ))}
      </Routes>
      <PlayerPanel />
    </main>
  );
}

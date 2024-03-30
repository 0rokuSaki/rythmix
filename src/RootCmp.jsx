import React from "react";
import { Routes, Route } from "react-router";

import routes from "./routes";

export function RootCmp() {
  return (
    <div>
      <main className="main-container">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} exact={true} element={route.component} path={route.path} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

import React from "react";
import { Routes as Elements, Route, Navigate } from "react-router-dom";
import { routes } from "./config";
interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <Elements>
      {routes.map((route) => (
        <Route
          path={route.path}
          key={route.path}
          element={<route.Component />}
        />
      ))}
    </Elements>
  );
};

export default Routes;

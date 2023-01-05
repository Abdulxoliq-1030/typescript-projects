import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, FavouritePage } from "./pages";
import { Navigation } from "./components";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavouritePage />} />
      </Routes>
    </>
  );
};

export default App;

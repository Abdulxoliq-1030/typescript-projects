import React, { useEffect } from "react";
import { Navbar } from "./components";
import Routes from "./routes/routes";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
};

export default App;

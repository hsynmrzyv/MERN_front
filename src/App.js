import React from "react";

// Components
import Header from "./Components/Header/Header.tsx";

// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home.tsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

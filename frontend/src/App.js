import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./NavBar/Navigation";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;

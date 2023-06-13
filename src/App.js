import React from "react";
import {BrowserRouter, Routes , Route, Link } from "react-router-dom";
import Home from "./components/home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Homee</Link> <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

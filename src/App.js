import React from "react";
import "./App.css";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

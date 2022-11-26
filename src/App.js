import React from "react";
import "./App.css";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WriterRegister from "components/pages/writerregister/WriterRegister";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<WriterRegister />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

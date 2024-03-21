import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";


const App = () => {
  const WithNavbarFooter = ({ children }) => (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
  return (
    <div>
      {/* <h1>Hello world</h1> */}
      
      <Routes>
        <Route path="/" element={<WithNavbarFooter><Home /></WithNavbarFooter>} />
        <Route path="/post/:id" element={<WithNavbarFooter><Single /></WithNavbarFooter>} />
        <Route path="/write" element={<WithNavbarFooter><Write /></WithNavbarFooter>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      
    </div>
  );
};

export default App;

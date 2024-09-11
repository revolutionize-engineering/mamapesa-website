import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import NavBar from "./common/NavBar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Chatbot from "./Chatbot/Chatbot";
import Payment from "./Payment/Payment";

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="scrollable">
        {/* navbar */}
        
       <NavBar/>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mamapesa-ai" element={<Chatbot />} />
          <Route path="/payment-ai" element={<Payment/>}/>
        </Routes>
        {/* outlet to app */}
        <Outlet />
      </div>
    </BrowserRouter>
  );
};

export default App;

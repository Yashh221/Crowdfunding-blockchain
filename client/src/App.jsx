import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { CreateCampaign, CampaignDetails, Home, Profile } from "./pages";

const App = () => {
  return (
    <div className="relative sm:p-8 p-4 flex flex-row bg-[#13131a] min-h-screen">
      <div className="sm:flex hidden mr-10 relative"><Sidebar/></div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5"><Navbar/></div>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;

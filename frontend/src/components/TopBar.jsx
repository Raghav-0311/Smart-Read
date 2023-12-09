import React from "react";
import Logo from "../assets/smartread.png";

const TopBar = () => {
  return (
    <div className="flex justify-center items-center mb-8 bg-[#D52D5C]">
      <img src={Logo} alt="SmartRead Logo" className="w-80 pt-4 pb-4" />
    </div>
  );
};

export default TopBar;

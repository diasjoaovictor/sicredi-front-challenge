import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import companyLogo from "../../img/Sicredi.jpg";
import "./TopMenu.css";

export const TopMenu = () => {
  const [user, setUser] = useState({
    name: "Pedro",
  });

  return (
    <>
      <div className="navbar">
        <div className="navbar-icon">
          <MenuIcon />
          <div>
        <img src={companyLogo} className="logo" alt="BigCo Inc. logo" />
        </div>
        </div>
        
        <div className="navbar-user">
          Olá, {user.name}
          <PersonIcon />
        </div>
      </div>
    </>
  );
};

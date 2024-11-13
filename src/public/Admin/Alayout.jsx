import React from "react";
import { Outlet } from "react-router-dom";
import AHeader from "../../component/Admin/header";
import SideMenu from "../../component/Admin/sideMenu"
import "../Admin/alayout.css"


const ALayout = () => {
  return (
    <div className="ALayout">
      <AHeader />
      <div id="admin">
        <SideMenu/>
        <div id="admin_body"><Outlet /></div>
      </div>
    </div>
  );
};
export default ALayout;

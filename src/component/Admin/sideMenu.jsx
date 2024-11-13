import React from "react";
import { Link } from "react-router-dom";
import "./sideMenu.css";
import { IoHome } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { RiUserSearchFill } from "react-icons/ri";
import { MdArticle } from "react-icons/md";

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <div className="side-dashboard">Dashboard</div>
      <ul>
        <li>
          <div className="petit-box-dash">
            <div>
              <IoHome />
            </div>
            <div className="slide-left">
              <Link to="/">Acceuil</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="petit-box-dash">
            <div>
              <MdDashboardCustomize />
            </div>
            <div className="slide-left">
              <Link to="/admin/dashboard">Dashboard</Link>
            </div>
          </div>
        </li>
        <li>
          <div className="petit-box-dash">
            <div>
              <RiUserSearchFill />
            </div>
            <div className="slide-left">
              user
              <ul className="listeDecaler">
                <li>
                  <Link to="/admin/user/index">Liste</Link>
                </li>
                <li>
                  <Link to="/admin/user/Add">Ajoutez</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className="petit-box-dash">
            <div>
              <MdArticle />
            </div>
            <div className="slide-left">
            Articles
            <ul className="listeDecaler">
              <li>
                <Link to="/admin/Articles/index">Liste</Link>
              </li>
              <li>
                <Link to="/admin/Articles/edit">Ajoutez</Link>
              </li>
            </ul>

          </div>
      </div>
          
          
        </li>
      </ul>
    </div>
  );
};
export default SideMenu;

import { CiBurger } from "react-icons/ci";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlayCircle } from "react-icons/fa";
import { CommandIcon } from "lucide-react";
import { TvMinimal } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import {image45 } from "../assets";
import { X } from "lucide-react";
import { Search } from "lucide-react";
import { useState } from "react";
import { image11 } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { PiArticleMediumFill } from "react-icons/pi";
import SearchBar from "./search";

/////////

const Header = ({ nombre, message, handleSearch }) => {
  const connecter = localStorage.getItem("token");
  const info = JSON.parse(localStorage.getItem("user"));
  const premierLettre = info?.nom[0];

  //hook afficher menu hamberger...............
  const [active, setActive] = useState("Nav_header_ecrant");
  const showNavbar = () => {
    setActive("Nav_header_ecrant  showNaveBar");
  };
  const removeNavbar = () => {
    setActive("Nav_header_ecrant");
  };
  //hooks ajout bacground lorsqu'il scroll
  const [noBg, addBg] = useState("ul_nave_3");
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("ul_nave_3 bg_scroll");
    } else {
      addBg("ul_nave_3");
    }
  };
  window.addEventListener("scroll", addBgColor);

  const [actives, setActives] = useState("Nav_header_ecrant");
  const showProfil = () => {
    setActives("Nav_header_ecrant  showNaveBar");
  };
  const removeProfil = () => {
    setActives("Nav_header_ecrant");
  };

  return (
    <>
      <nav className="Nav_header">
        <ul className="ul_header">
          <div className="message_ajout">{message}</div>
          <div onClick={showNavbar}>
            <li>
              <Link className="li_header">
                <RxHamburgerMenu className="hambur" />
                Menu
              </Link>
            </li>
          </div>
          <li>
            <NavLink to="/replay" className="li_header">
              <FaPlayCircle className="hambur" />
              Replay
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles" className="li_header">
              <PiArticleMediumFill className="hambur" />
              Article
            </NavLink>
          </li>
          <li>
            <NavLink to="/panier" className="li_header_nav">
              <SlBasket className="panier_portable" />
              <span className="rond_blanc_portable">{nombre}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/programme" className="li_header">
              <TvMinimal className="hambur" />
              Programme
            </NavLink>
          </li>
          <li>
            <NavLink to="/commande" className="li_header">
              <CommandIcon className="hambur" />
              Commandes
            </NavLink>
          </li>

          {connecter ? (
            <li>
              <NavLink
                to="/profil"
                className="li_header"
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "100%",
                  border: "2px solid white",
                  padding: "1.2rem",
                  background: "blue",
                }}
              >
                <div className="lettre">{premierLettre}</div>
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/connexion" className="li_header">
                <CircleUserRound className="hambur" />
                Connexion
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      {/* celui qui permet de cacher la nav bar c'est la div qui contient ul */}
      <div className={active}>
        <ul className="ul_header_ecrant">
          <div className="logo_nav">
            <img height="43rem" width="78rem" src={image45} />
            <div className="loupe">
              <div className="loupe_rigth">
                <Search />
              </div>
              <div className="supp">
                <li onClick={removeNavbar}>
                  <X />
                </li>
              </div>
            </div>
          </div>
          <NavLink className="lin" to="/acceuil">
            <li onClick={removeNavbar} className="li_header">
              Acceuil
            </li>
          </NavLink>
          <NavLink className="lin" to="/articles">
            <li onClick={removeNavbar} className="li_header">
              Articles
            </li>
          </NavLink>
          <NavLink className="lin" to="/programme">
            <li onClick={removeNavbar} className="li_header">
              Calendrier des Programmes
            </li>
          </NavLink>
          <NavLink className="lin" to="/commande">
            <li onClick={removeNavbar} className="li_header">
              mes commandes
            </li>
          </NavLink>
        </ul>
      </div>
      <nav className="Nav_header_ordi">
        <ul className={noBg}>
          <div className="message_ajout_ordi">{message}</div>
          <div>
            <NavLink to="/acceuil">
              <img height="59rem" width="100rem" src={image45} />
            </NavLink>
          </div>
          <div className="ul_nave_3_li">
            <li className="li_header">
              <NavLink to="/replay" className="li_header_nav">
                <span className="descend">Replay</span>
              </NavLink>
            </li>
            <li className="li_header">
              <NavLink to="/programme" className="li_header_nav">
                Nos Programmes
              </NavLink>
            </li>
            <li className="li_header">
              <NavLink to="/" className="li_header_nav">
                Acceuil
              </NavLink>
            </li>
            <li className="li_header">
              <NavLink to="/articles" className="li_header_nav">
                Articles
              </NavLink>
            </li>
            <li className="li_header">
              <NavLink to="/panier" className="li_header_nav">
                <SlBasket className="panier_rond" />
                <span className="rond_blanc">{nombre}</span>
              </NavLink>
            </li>
            <li className="li_header">
              <NavLink to="/commande" className="li_header_nav">
                Commandes
              </NavLink>
            </li>
            <div className="search_flex">
              <SearchBar onSearch={handleSearch} />
              <div className="loupe">
              <Search />
            </div>
            </div>
          </div>
          <div className="loupe_rigth">
            
            <div className="userBtn">
              {connecter ? (
                <NavLink className="a" to="/profil">
                  <li
                    className="li_header_icone"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "100%",
                      border: "1px solid black",
                      padding: "1.2rem",
                      background: "blue",
                      border: "2px solid white",
                    }}
                  >
                    <div className="lettre">{premierLettre}</div>
                  </li>
                </NavLink>
              ) : (
                <div>
                  <li className="li_header_icone">
                    <NavLink className="ecriture_connexion" to="/connexion">
                      <div className="connexion_flex">
                        <img src={image11} />
                      </div>
                      <span style={{ fontSize: "14px" }}>Connexion</span>
                    </NavLink>
                  </li>
                </div>
              )}
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
};
export default Header;

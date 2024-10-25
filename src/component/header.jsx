import { CiBurger } from "react-icons/ci";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlayCircle } from "react-icons/fa";
import { Radio } from "lucide-react";
import { TvMinimal } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { image2 } from "../assets";
import { X } from "lucide-react";
import { Search } from "lucide-react";
import { useState } from "react";
import { image11 } from "../assets";
import { Link, NavLink } from "react-router-dom";
import { Dot } from "lucide-react";
import { SlBasket } from "react-icons/sl";
import { PiArticleMediumFill } from "react-icons/pi";

/////////

const Header = ({ nombre,message }) => {
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
            <img height="33rem" width="78rem" src={image2} />
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
          <NavLink className="lin" to="/replay">
            <li onClick={removeNavbar} className="li_header">
              Nos Emissions
            </li>
          </NavLink>
        </ul>
      </div>
      <nav className="Nav_header_ordi">
        <ul className={noBg}>
        <div className="message_ajout_ordi">{message}</div>
          <div>
            <NavLink to="/acceuil">
              <img height="39rem" width="100rem" src={image2} />
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
                Notre Chaine
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
          </div>
          <div className="loupe_rigth">
            <div className="loupe">
              <Search />
            </div>
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

                  {/* <div className="blanc">
                    <div className="nom_profil">
                      <p className="nom">{info.nom}</p>
                    </div>
                    <div className="box_profil">
                      <hr />
                      <p>Mes espaces</p>
                      <div className="barre">
                        <FaUser className="logo_profil" />
                        Etudiant
                      </div>
                      <div className="barre">
                        <CiSettings className="logo_profil" />
                        Compte et parametre
                      </div>
                      <Link className="lien_profil" to="/Redaction">
                        <div className="barre">
                          <TiMessages className="logo_profil" />
                          Espace redactions
                        </div>
                      </Link>
                      <Link className="lien_profil" to="/Messages">
                        <div className="barre">
                          <MdOutlineMail className="logo_profil" />
                          Messages
                        </div>
                      </Link>

                      <Link className="lien_profil" to="/Notifications">
                        <div className="barre">
                          <IoIosNotificationsOutline className="logo_profil" />
                          Notifications
                        </div>
                      </Link>
                      <div onClick={() => deconnecter()} className="barre">
                        <FaPowerOff className="logo_profil" /> Deconnexions
                      </div>
                    </div>
                  </div> */}
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

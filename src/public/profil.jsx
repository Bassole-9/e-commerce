import "./cssPublic/profil.css";
import { Link } from "react-router-dom";
import { userServices } from "../Api/service";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { TiMessages } from "react-icons/ti";


const Profil = () => {
  const infoUser = JSON.parse(localStorage.getItem("user"));
  console.log(infoUser);

  const Navigate = useNavigate();

  const deconnecter = () => {
    userServices.logout();
    Navigate("/");
    window.location.reload();
  };

  return (
    <>
      <div className="container_profil">
        <div className="grand_profil">
          <div className="petit_profil">
            <div className="noir">
              <div className="vide_profil">
                <div className="barre_vide">Profil</div>
                <h3></h3>
                <h5>Mes espaces</h5>
                <div className="barre">
                  <FaUser className="logo_profil" />
                  <p style={{ color: "red" }}>{infoUser.nom}</p>
                </div>
                <Link className="lien_profil" to="/profil/Redactions">
                  <div className="barre">
                    <TiMessages className="logo_profil" />
                    Espace redactions
                  </div>
                </Link>
                <Link className="lien_profil" to="/profil/Messages">
                  <div className="barre">
                    <MdOutlineMail className="logo_profil" />
                    Messages
                  </div>
                </Link>
                <Link className="lien_profil" to="/profil/notifications">
                  <div className="barre">
                    <IoIosNotificationsOutline className="logo_profil" />
                    Notifications
                  </div>
                </Link>
                <div onClick={() => deconnecter()} className="barre">
                  <FaPowerOff className="logo_profil" /> Deconnexions
                </div>
              </div>
              <div className="info_width">
                <div className="info_profil">
                  <div className="text_cadre">
                    <h2>
                      Boostez votre recherche d'alternance grâce à nos services
                      innovants !
                    </h2>
                    <p>
                      Simplifiez vos recherches et candidatures grâce à notre IA
                    </p>
                    <p>
                      Démarquez-vous avec nos outils et services
                      <br /> exclusifs
                    </p>
                    <p>
                      Accédez à des milliers d’offres d’emploi partout,
                      <br /> tout le temps
                    </p>
                    <div className="btn_profil">
                      <button>Voir l'historique de l'entrepise</button>
                      <button>Qui sommes Nous ? </button>
                    </div>
                  </div>
                  <div className="ecrit_info"></div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Profil;

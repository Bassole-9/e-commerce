import "./cssPublic/erreur.css";
import { Link } from "react-router-dom";

const Erreur = () => {
  return (
    <>
      <div className="container_Erreur">
        <div className="section_Erreur">
          <div className="petit_Erreur">
            <div className="erreur">404</div>
            <div className="titre_erreur">page non Trouvée</div>
            <Link to="/acceuil"><button className="btn_erreur">Acceuil</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Erreur;

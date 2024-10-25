import { Link } from "react-router-dom";
import "./css/inscription.css";
import { image9 } from "../assets";
import { image10 } from "../assets";
import { X } from "lucide-react";
import { useState } from "react";
import { userServices } from "../Api/service";
import { useNavigate } from "react-router-dom";
import { image37, image38 } from "../assets";

const Inscription = () => {
  const [info, setInfo] = useState([
    {
      nom: "",
      email: "",
      motDePasse: "",
      DateDeNaissance: "",
      Numero: "",
    },
  ]);

  const [erreur, setErreur] = useState("");

  const Navigate = useNavigate();

  //   const envoie = (e) => {
  //     e.preventDefault();
  //     const envoyez =()=>{
  //         axios.post("http://localhost:4000",info,{
  //             headers:{
  //                 Authorization : localStorage.getItem("user")
  //             }
  //         }
  //     )}
  //   };

  const inscrire = (e) => {
    e.preventDefault();
    console.log(info);
    userServices
      .AjoutUser(info)
      .then((res) => {
        if (res.status === 200) {
          Navigate("/connexion");
        }
      })
      .catch((err) => {
        setErreur(err.response.data.message);
      });
  };

  return (
    <>
      <div className="container">
        <div className="section_inscription">
          <div className="ilustre1">
            <img width="100%" height="100%" src={image37} />
          </div>
          <form onSubmit={inscrire}>
            <div className="xxx">
              <Link to="/acceuil" className="x1">
                <X />
              </Link>
            </div>
            <div className="inscri_connexion">
              <p> Cree un compte </p>
            </div>
            <div className="inscri2">
              <img src={image9} className="rond" />
              <img src={image10} className="rond" />
            </div>
            <hr />
            <div className="inscri3">
              <p>les champs marquer en astérisque sont obligatoire</p>
            </div>

            <div className="inscri4">
              <input
                className="text"
                type="email"
                name=""
                value={info.email}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                placeholder="E-mail*"
              />
              <hr />
              <div style={{ color: "red", display: "flex" }}>{}</div>
            </div>
            <div className="inscri4">
              <input
                type="password"
                name=""
                placeholder="Mot de passe*"
                value={info.motDePasse}
                onChange={(e) =>
                  setInfo({ ...info, motDePasse: e.target.value })
                }
              />
              <hr />
              <div style={{ color: "red", display: "flex" }}>{erreur}</div>
            </div>
            <div className="info_inscri">
              <p>
                8 caractères minimum, dont 3 parmi:
                <br />1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial
              </p>
            </div>
            <div className="inscri4">
              <input
                type="text"
                placeholder="nom et prenom(s)*"
                value={info.nom}
                onChange={(e) => setInfo({ ...info, nom: e.target.value })}
              />
              <hr />
            </div>
            <div className="inscri4">
              <input
                type="date"
                placeholder="Date de naissance*"
                value={info.DateDeNaissance}
                onChange={(e) =>
                  setInfo({ ...info, DateDeNaissance: e.target.value })
                }
              />
              <hr />
              <div style={{ color: "red", display: "flex" }}>{}</div>
            </div>
            <div className="inscri4">
              <input
                type="number"
                placeholder="numero de telephone"
                value={info.Numero}
                onChange={(e) => setInfo({ ...info, Numero: e.target.value })}
              />
              <hr />
              <div style={{ color: "red", display: "flex" }}>{}</div>
            </div>
            <div className="check">
              <input type="checkbox" />
              <p>
                J'accepte que mes données soient communiqués et <br />
                réutilisées afin de recevoir des offres personnalisées *
              </p>
            </div>

            <div className="info2">
              <p>
                En cliquant sur « Connexion avec Facebook », « Connexion avec
                Apple », « Connexion avec Google » ou « Valider et continuer »,
                je reconnais avoir pris connaissance des Conditions Générales
                d'Utilisation et je les accepte.
              </p>
            </div>
            <button className="btn_form">Valider et continuer</button>
            <div className="dejas">
              <p>
                déja inscrit(e) ?{" "}
                <Link className="co" to="/connexion">
                  se connecter
                </Link>
              </p>
            </div>
          </form>
          <div className="ilustre1">
            <img width="100%" height="100%" src={image38} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Inscription;

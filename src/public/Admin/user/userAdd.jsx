import React, { useState } from "react";
import { apiService } from "../../../Api/api.call";
import { useNavigate } from "react-router-dom";

const UserAdd = () => {
  const [infoUtilisateur, setInfoUtilisateur] = useState({
    nom: "",
    email: "",
    motDePasse: "",
    DateDeNaissance: "",
    Numero: "",
  });

  const [erreur, setErreur] = useState("");

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(infoUtilisateur);
    apiService
      .AjouterUser(infoUtilisateur)
      .then((res) => navigate("../index"))
      .catch((err) => setErreur(err.response.data.message));
  };

  return (
    <div className="UserEdit">
      <h1>userAdd</h1>
      <form onSubmit={onSubmit} className="formAdmin">
        <div>
          <h1>Ajoutez utilisateur</h1>
          <div
            style={{
              color: "red",
              display: "flex",
              fontSize: "25px",
              marginTop: "2rem",
            }}
          >
            {erreur}
          </div>
        </div>
        <div className="parent_admin-modif">
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="login">Nom utilisateur</label>
            </div>
            <div>
              <input
                type="text"
                name="login"
                value={infoUtilisateur.nom}
                onChange={(e) =>
                  setInfoUtilisateur({
                    ...infoUtilisateur,
                    nom: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={infoUtilisateur.email}
                onChange={(e) =>
                  setInfoUtilisateur({
                    ...infoUtilisateur,
                    email: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="number">Numero:</label>
            </div>
            <div>
              <input
                type="number"
                name="number"
                value={infoUtilisateur.Numero}
                onChange={(e) =>
                  setInfoUtilisateur({
                    ...infoUtilisateur,
                    Numero: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="date">Date de Naissances:</label>
            </div>
            <div>
              <input
                type="date"
                name="text"
                value={infoUtilisateur.DateDeNaissance}
                onChange={(e) =>
                  setInfoUtilisateur({
                    ...infoUtilisateur,
                    DateDeNaissance: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="date">mot de passe:</label>
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={infoUtilisateur.motDePasse}
                onChange={(e) =>
                  setInfoUtilisateur({
                    ...infoUtilisateur,
                    motDePasse: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="btn-connexion">
            <button className="btn_connexion">Ajoutez</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserAdd;

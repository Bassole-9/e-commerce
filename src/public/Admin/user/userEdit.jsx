import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { apiService } from "../../../Api/api.call";
import "./userEdit.css";

const UserEdit = () => {
  const [user, setUser] = useState([]);
  const flag = useRef(false);
  const { uid } = useParams();


  console.log(user);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    apiService
      .updateUser(user)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (flag.current === false) {
      apiService
        .getUser(uid)
        .then((res) => {
          setUser(res);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  return (
    <div className="UserEdit">
      <h1>userId</h1>
      <form onSubmit={onSubmit} className="formAdmin">
        <div>
          <h1>Modifier utilisateur</h1>
        </div>
        <div className="parent_admin-modif">
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="login">Nom utilisateur</label>
            </div>
            <div>
              <input
                type="text"
                name="nom"
                value={user.nom}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="password">Mot De Passe:</label>
            </div>
            <div>
              <input
                type="text"
                name="password"
                value={user.motDePasse}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="number">Numero:</label>
            </div>
            <div>
              <input
                type="text"
                name="Numero"
                value={user.Numero}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="id">identifiant:</label>
            </div>
            <div>
              <input
                type="text"
                name="id"
                value={user._id}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="input-modif">
            <div className="carre-login-modif">
              <label htmlFor="date">Date de Naissances:</label>
            </div>
            <div>
              <input
                type="text"
                name="date"
                value={user.DateDeNaissance}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="btn-connexion">
            <button className="btn_connexion">modifier</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UserEdit;

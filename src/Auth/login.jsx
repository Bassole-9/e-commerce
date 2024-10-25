import { Link } from "react-router-dom";
import "./css/connexion.css";
import { image39, image9 } from "../assets";
import { image10 } from "../assets";
import { X } from "lucide-react";
import { useState } from "react";
import { userServices } from "../Api/service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [info, setInfo] = useState([
    {
      email: "",
      motDePasse: "",
    },
  ]);

  const connexion = (e) => {
    e.preventDefault();
    console.log(info);
    userServices
      .login(info)
      .then((res) => {
        if (res.status === 200) {
        console.log(res.data);
          userServices.saveToken(res.data.token)
          userServices.saveInfo(res.data.message)
          Navigate("/acceuil");
          window.location.reload()
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <div className="section_inscription">
        <div className="ilustre2">
            <img width="100%" height="100%" src={image39} />
          </div>
          <form onSubmit={connexion}>
            <div className="xxx">
              <Link to="/acceuil" className="x1">
                <X />
              </Link>
            </div>
            <div className="inscri_connexion">
              <p>Se Connecter </p>
            </div>
            <div className="inscri2">
              <img src={image9} className="rond" />
              <img src={image10} className="rond" />
            </div>
            <hr />

            <div className="inscri4">
              <input
                className="text"
                type="email"
                name=""
                placeholder="E-mail*"
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
              />
              <hr />
            </div>
            <div className="inscri4">
              <input
                type="password"
                name=""
                placeholder="Mot de passe*"
                onChange={(e) =>
                  setInfo({ ...info, motDePasse: e.target.value })
                }
              />
              <hr />
            </div>
            <div className="mot">
              <p>Mot de passe oublié ?</p>
            </div>

            <button className="btn_form">Se Connecter</button>
            <div className="dejas">
              <p>
                Nouveau ?{" "}
                <Link className="co" to="/inscription">
                  Créer un compte
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;

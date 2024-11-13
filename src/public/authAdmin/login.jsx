import react from "react";
import "./loginAdmin.css";
import { useState } from "react";

const LoginAdmin = () => {
  const [userNames, setUserName] = useState({
    username: "",
    password: "",
  });

  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={Submit} className="formAdmin">
      <div>
        <h1>Connexion</h1>
      </div>
      <div className="parent_admin">
        <div className="carre-login">
          <label htmlFor="login">Username:</label>
        </div>
        <div className="group">
          <input
            type="text"
            name="login"
            value={userNames.username}
            onChange={(e) =>
              setUserName({ ...userNames, username: e.target.value })
            }
          />
        </div>
        <div className="carre-login">
          <label htmlFor="password">Mot de passe:</label>
        </div>
        <div className="group">
          <input
            type="text"
            name="login"
            value={userNames.password}
            onChange={(e) =>
              setUserName({ ...userNames, password: e.target.value })
            }
          />
        </div>
        <div className="group">
          <button className="btn_connexion">Conexion</button>
        </div>
      </div>
    </form>
  );
};
export default LoginAdmin;

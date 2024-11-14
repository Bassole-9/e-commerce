import React, { useEffect, useState } from "react";
import { apiService } from "../../../Api/api.call";
import { useRef } from "react";
import "./user.css";
import { image46 } from "../../../assets";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const flag = useRef(false);
  const [messageSup, setMessagesup] = useState("");

  useEffect(() => {
    if (flag.current === false) {
      apiService
        .getUsers()
        .then((res) => {
          setUsers(res);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  const delUser = (userId) => {
    apiService
      .deleteUser(userId)
      .then((res) => {
        setMessagesup(res);
        setUsers(users.filter((user) => user._id !== userId));
        setTimeout(() => {
          setMessagesup("");
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="User">
      <div className="user-bare">
        <h2>UserListe</h2>
        <h3
          style={{
            background: "green",
            borderRadius: "10px",
          }}
        >
          {messageSup}
        </h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>Id de l'utilsateur</th>
            <th>Nom et premon</th>
            <th>Email</th>
            <th>Date de Naissances</th>
            <th>Numero de telephone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => {
            return (
              <tr key={id}>
                <td>
                  <span onClick={() => delUser(user._id)} className="del_ubtn">
                    X
                  </span>
                </td>
                <td>
                  <Link to={`/admin/user/edit/${user._id}`}>{user._id}</Link>
                </td>
                <td>{user.nom}</td>
                <td>{user.email}</td>
                <td>{user.DateDeNaissance}</td>
                <td>{user.Numero}</td>
                <td>
                  <div className="image-utilisateur">
                    <img height="100%" width="100%" src={image46} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default User;

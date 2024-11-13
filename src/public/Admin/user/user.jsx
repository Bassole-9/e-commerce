import React, { useEffect, useState } from "react";
import { apiService } from "../../../Api/api.call";
import { useRef } from "react";
import "./user.css";
import { image46 } from "../../../assets";

const User = () => {
  const [users, setUsers] = useState([]);
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current === false) {
      apiService
        .getUser()
        .then((res) => {
          console.log(res);

          setUsers(res);
        })
        .catch((err) => console.log(err));
    }
    return () => (flag.current = true);
  }, []);

  return (
    <div className="User">
      <h2>UserListe</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nom et premon</th>
            <th>Email</th>
            <th>Date de Naissances</th>
            <th>Numero de telephone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => {
            return (
              <tr key={id}>
                <td>{user._id}</td>
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

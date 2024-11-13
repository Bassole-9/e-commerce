import React from "react";
import "./headerA.css";

const AHeader = () => {
  return (
    <div className="AHeader">
      <div className="box-deco">
        <h2>header Admin</h2>
      </div>

      <div className="box-deco2">
        <button className="decoAdmin">Deconnexion</button>
      </div>
    </div>
  );
};
export default AHeader;

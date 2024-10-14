import "./cssPublic/redaction.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Redaction = () => {
  return (
    <>
      <div className="container_redaction">
        <div className="section_redaction">
          <div className="notif_flex">
            <h2>
              <Link to="/profil" className="notif_color">
                <IoArrowBackCircleSharp />
              </Link>
            </h2>
          </div>
          <div className="redaction1">Pas de cour en redactions</div>
        </div>
        <div className="div_redaction">
          <div className="redaction2">
            <h3>pour les etudiant</h3>
            <div className="redaction_ecrit">
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
            </div>
          </div>
          <div className="redaction2">
            <h3>pour les etudiant</h3>
            <div className="redaction_ecrit">
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
            </div>
          </div>
          <div className="redaction2">
            <h3>pour les etudiant</h3>
            <div className="redaction_ecrit">
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
            </div>
          </div>
          <div className="redaction2">
            <h3>pour les etudiant</h3>
            <div className="redaction_ecrit">
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
              <p>formations diplomantes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Redaction;

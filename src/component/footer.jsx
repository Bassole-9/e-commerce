import "./footer.css";
import {
  image2,
  image45,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav className="nav_footer">
        <div className="div_log">
          <img width="100%" height="100%" src={image45}></img>
        </div>
        <div className="div_footer">
          <p>
            <Link className="lien">Acceuil / </Link> Replay
          </p>
        </div>
        <div className="copi">
          <p>Copyright © 2024 - Tous droits réservés</p>
        </div>

        <div className="copi">
          <ul>
            <li>
              <Link className="lien">Application Android | </Link>
            </li>
            <li>
              <Link className="lien">Application iOS | </Link>
            </li>
            <li>
              <Link className="lien">Live | </Link>
            </li>
            <li>
              <Link className="lien">Replay| </Link>
            </li>
            <li>
              <Link className="lien">Contact | </Link>
            </li>
            <li>
              <Link className="lien">Conditions générales</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <ul>
            <li>
              <Link className="logo_mini">
                <img width="100%" height="100%" src={image5} />
              </Link>
            </li>
            <li>
              <Link className="logo_mini">
                <img width="100%" height="100%" src={image4} />
              </Link>
            </li>
            <li>
              <Link className="logo_mini">
                <img width="100%" height="100%" src={image7} />
              </Link>
            </li>
            <li>
              <Link className="logo_mini">
                <img width="100%" height="100%" src={image3} />
              </Link>
            </li>
            <li>
              <Link className="logo_mini">
                <img width="100%" height="100%" src={image8} />
              </Link>
            </li>
            <li>
              <Link className="logo_mini">
                <img width="100%" height="100%" src={image6} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="info_footer">Conçu par NCI et Edité par VEONE</div>
      </nav>
    </>
  );
};
export default Footer;

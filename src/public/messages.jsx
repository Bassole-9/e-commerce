import { IoArrowBackCircleSharp } from "react-icons/io5";
import "./cssPublic/messages.css";
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <>
      <div className="container_message">
        <div className="section_message">
          <div className="message1">
            <div className="notif_flex">
              <h1>Messageries</h1>
              <h2>
                <Link to ="/profil" className="notif_color">
                  <IoArrowBackCircleSharp/>
                </Link>
              </h2>
            </div>
            <div className="div_message">
              Votre boite a message est vide actuellem !!!
            </div>
          </div>
          <div className="notif2"></div>
        </div>
      </div>
    </>
  );
};
export default Messages;

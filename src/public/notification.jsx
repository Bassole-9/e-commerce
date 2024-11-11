import "./cssPublic/notification.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Notifications = () => {

  return (
    <>
      <div className="container_notif">
        <div className="section_notif">
          <div className="notif1">
            <div className="notif_flex">
              <h1>Notification</h1>
              <h2>
                <Link to="/profil" className="notif_color">
                    <IoArrowBackCircleSharp />
                </Link>
              </h2>
            </div>
            <div className="div_notif">
              pas de notifications pour le moments !!!
            </div>
          </div>
          <div className="notif2"></div>
        </div>
      </div>
    </>
  );
};
export default Notifications;

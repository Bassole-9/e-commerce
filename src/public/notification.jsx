import "./cssPublic/notification.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import { userServices } from "../Api/service";

const Notifications = () => {


  //////consommation Direct avec Axios 
  const consommation = async ()=>{
    const conso = await axios.post("http://localhost:3000/api/user", validation,{
      headers:{
       Authorization:localStorage.getItem("data")
      }
    })
    if(conso.status ===200){
      console.log("c'est ici q'uon met a jour les Hook tableau vide")
    }
  }


  /////consomation avec les function importer depuis leur creations
  const envoie = ()=>{
    userServices.login("donnee a envoyer")
    .then((res)=>{
      if(res.status ===200){
        console.log("c'est ici qu'on met a jour les Hook vide");
      }
      
    })
    .catch(err=> console.log(err))
  }




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

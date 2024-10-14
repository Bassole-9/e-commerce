import { Routes,Route } from "react-router-dom";
import Profil from "./profil";
import Erreur from "./erreur";
import Notifications from "./notification";
import Messages from "./messages";
import Redaction from "./redaction";

const ProfilRouter =()=>{
    return(
        <>
            <Routes>
                    <Route index element ={<Profil/>}/>
                    <Route path="/messages" element={<Messages/>}/>
                    <Route path="/Notifications" element={<Notifications/>}/>
                    <Route path="/Redactions" element={<Redaction/>}/>
                    <Route path="/*" element={<Erreur/>}/>
            </Routes>
        </>
    )
}
export default ProfilRouter
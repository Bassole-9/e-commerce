import react from "react";
import LoginAdmin from "./login";
import Erreur from "../erreur"
import { Routes,Route } from "react-router-dom";

const AuthRouter= () => {
  return (
        <Routes>
            <Route index element={<LoginAdmin/>}/>
            <Route path="login" element={<LoginAdmin/>}/>
            <Route path="*" element={<Erreur/>}/>
        </Routes>
  );
};
export default AuthRouter;

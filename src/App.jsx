import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouter from "./public/publicRouter";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//wrapper le non retour a la page inscription et connection lorqu'on est connecter
const Wraper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const brows = useNavigate();
  let location = useLocation();
  useEffect(() => {
    let session = localStorage.getItem("token");
    const sessionCo = ["/connexion", "/inscription"];
    const sessionDeco = ["/profil"]
    if (session && sessionCo.includes(location.pathname)) {
      brows("/");
    } 
    if(!session && sessionDeco.includes(location.pathname)){
      brows("/connexion")
    }
    setLoading(false);
  }, [location,brows]);
  return loading ? <p>Loading</p> : children;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Wraper>
          <Routes>
            <Route path="/*" element={<PublicRouter />} />
            {/* <Route path="/auth/*" element={<AuthRouter />} /> */}
          </Routes>
        </Wraper>
      </BrowserRouter>
    </>
  );
}

export default App;

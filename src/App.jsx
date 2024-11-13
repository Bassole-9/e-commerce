import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRouter from "./public/publicRouter";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollTop";
import AdminRouter from "./public/Admin/adminRouter";
import AuthGuard from "./helpers/AuthGuard";
import LoginAdmin from "./public/authAdmin/login";

//wrapper le non retour a la page inscription et connection lorqu'on est connecter
const Wraper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const brows = useNavigate();
  let location = useLocation();
  useEffect(() => {
    let session = localStorage.getItem("token");
    const sessionCo = ["/connexion", "/inscription"];
    const sessionDeco = ["/profil"];
    if (session && sessionCo.includes(location.pathname)) {
      brows("/");
    }
    if (!session && sessionDeco.includes(location.pathname)) {
      brows("/connexion");
    }
    setLoading(false);
  }, [location, brows]);
  return loading ? <p>Loading</p> : children;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Wraper>
          <ScrollToTop />
          <Routes>
            <Route path="/*" element={<PublicRouter />} />
            <Route
              path="/admin/*"
              element={
                <AuthGuard>
                  <AdminRouter />
                </AuthGuard>
              }
            />
            <Route path="/auth/login" element={<LoginAdmin />} />
            {/* <Route path="/auth/*" element={<AuthRouter />} /> */}
          </Routes>
        </Wraper>
      </BrowserRouter>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import {
  Acceuil,
  Layout,
  Replay,
  Live,
  Programme,
  Profil,
  Notifications,
  Messages,
  Redaction,
  Erreur,
  PanierAchat,
  Article,
  ProfilRouter
} from ".";
import { Inscription, Login } from "../Auth";
import { useState } from "react";






const PublicRouter = () => {
  const [panier, setPanier] = useState(
    localStorage.getItem("panier")
      ? JSON.parse(localStorage.getItem("panier"))
      : []
  );
  const [message, setMessage] = useState("");
  ////le nombre qui va contenir le panier
  const nombre = panier.length;



  const ajoutez = (article) => {
    const local = JSON.parse(localStorage.getItem("panier"));
    if (local) {
      const exist = local.find((x) => {
        return x.id === article.id;
      });
      if (exist) {
        alert("le produit est deja dans le panier");
      } else {
        article.quantity = 1;
        local.push(article);
        localStorage.setItem("panier", JSON.stringify(local));
        //mise a jour de mon Hook par donnee du localStorage
        setPanier([...local]);
        setMessage("le produit a bien ete ajouter au panier");
        setTimeout(() => {
          setMessage("");
        }, 5000);
        console.log(panier);
      }
    } else {
      article.quantity = 1;
      const nouveauPanier = [article];
      localStorage.setItem("panier", JSON.stringify(nouveauPanier));
    }
  };










  return (
    <>
      <Routes>
        <Route element={<Layout nombre={nombre}/>}>
          <Route index element={<Acceuil />} />
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/Replay" element={<Replay />} />
          <Route path="/Live" element={<Live />} />
          <Route path="/Programme" element={<Programme />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/Profil/*"element={<ProfilRouter/>} />
          <Route path="/Articles" element={<Article ajoutez={ajoutez}/>} />
          <Route path="/Panier" element={<PanierAchat panier={panier} setPanier={setPanier}/>} />
          <Route path="/*" element={<Erreur />} />
        </Route>
      </Routes>
    </>
  );
};
export default PublicRouter;

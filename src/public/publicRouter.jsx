import { Routes, Route } from "react-router-dom";
import {
  Acceuil,
  Layout,
  Replay,
  Programme,
  Profil,
  Notifications,
  Messages,
  Redaction,
  Erreur,
  PanierAchat,
  Article,
  ProfilRouter,
  Commandes,
} from ".";
import { Inscription, Login } from "../Auth";
import { useState, useEffect } from "react";
import { apiService } from "../Api/api.call";
import { articles, chaussures, telephone } from "./data";

const PublicRouter = () => {
  const [panier, setPanier] = useState(
    localStorage.getItem("panier")
      ? JSON.parse(localStorage.getItem("panier"))
      : []
  );
  const [message, setMessage] = useState("");
  ////le nombre qui va contenir le panier
  const nombre = panier.length;

  const [liste, setListe] = useState([]);

  ///function pioche donnée
  const ajoutez = (article) => {
    const local = JSON.parse(localStorage.getItem("panier"));
    if (local) {
      const exist = local.find((x) => {
        return x.id === article.id;
      });
      if (exist) {
        setMessage("le produit est deja dans le panier");
        setTimeout(() => {
          setMessage("");
        }, 5000);
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
      }
    } else {
      article.quantity = 1;
      const nouveauPanier = [article];
      localStorage.setItem("panier", JSON.stringify(nouveauPanier));
    }
  };

  ///recuperationdes commandes de la BD
  useEffect(() => {
    apiService
      .getComandes()
      .then((res) => {
        setListe(res);
      })
      .catch((error) => console.log(error));
  }, []);

  //filtrer produit recherche
  const [filteredSearch, setFilteredSearch] = useState(articles);
  const [filteredChaussure, setFilteredChaussure] = useState(chaussures);
  const [filteredTelephone, setFilteredTelephone] = useState(telephone);

  const handleSearch = (query) => {
    if (query === "") {
      setFilteredSearch(articles);
      setFilteredChaussure(chaussures)
      setFilteredTelephone(telephone)
    } else {
      setFilteredSearch(
        articles.filter((article) =>
          article.nom.toLowerCase().includes(query.toLowerCase())
        )
      )
      setFilteredChaussure(
        chaussures.filter((chaussure) =>
          chaussure.nom.toLowerCase().includes(query.toLowerCase())
        )
      )
      setFilteredTelephone(
        telephone.filter((telephones) =>
          telephones.nom.toLowerCase().includes(query.toLowerCase())
        )
      )
    }
  };

  return (
    <>
      <Routes>
        <Route
          element={
            <Layout
              nombre={nombre}
              message={message}
              handleSearch={handleSearch}
            />
          }
        >
          <Route index element={<Acceuil />} />
          <Route path="/Acceuil" element={<Acceuil />} />
          <Route path="/Replay" element={<Replay />} />
          <Route path="/Programme" element={<Programme panier={panier} />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/Profil/*" element={<ProfilRouter />} />
          <Route
            path="/Articles"
            element={
              <Article ajoutez={ajoutez} filteredSearch={filteredSearch} filteredChaussure={filteredChaussure} filteredTelephone={filteredTelephone}/>
            }
          />
          <Route
            path="/Panier"
            element={
              <PanierAchat
                panier={panier}
                setPanier={setPanier}
                setListe={setListe}
              />
            }
          />
          <Route
            path="/commande"
            element={<Commandes liste={liste} setListe={setListe} />}
          />
          <Route path="/*" element={<Erreur />} />
        </Route>
      </Routes>
    </>
  );
};
export default PublicRouter;

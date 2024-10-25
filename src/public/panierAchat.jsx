import { useState } from "react";
import "./cssPublic/panier.css";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import { GrValidate } from "react-icons/gr";
import { userServices } from "../Api/service";
import axios from "axios";

const PanierAchat = ({ panier, setPanier }) => {
  const [commandeValide, setCommandeValide] = useState("");

  const Navigate = useNavigate();

  //incrementer quantité destructurer le panier
  const incrementer = (article) => {
    const exist = panier.find((x) => {
      return x.id === article.id;
    });
    setPanier(
      panier.map((m) => {
        if (m.id === article.id) {
          return {
            ...m,
            quantity: m.quantity + 1,
          };
        }
        return m;
      })
    );
  };
  ///decrementer quantité destructurer le panier
  const decrementer = (article) => {
    setPanier(
      panier.map((m) => {
        if (m.id === article.id) {
          return {
            ...m,
            quantity: m.quantity - 1,
          };
        }
        return m;
      })
    );
  };

  ////////////////////////////function supprimer article du panier et du localStorage/////////////////////////
  const removeproduit = (article) => {
    const nouveauPanier = panier.filter((d) => d.id !== article.id);
    setPanier(nouveauPanier);
    localStorage.setItem("panier", JSON.stringify(nouveauPanier));
  };

  //function prix total de panier
  const totalPrice = panier.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  ///////////////////////variable contenant les donnees a envoyer dans la Bd
  const data = {
    total: totalPrice,
    objet: panier,
  };

  //////fonction qui envoie la commande dans la Bd et verifie si l'utilisateur est connecte ou pas avant de passer la commande
  // const envoie = () => {
  //   if (!userServices.isLogged()) {
  //     Navigate("/connexion");
  //   } else {
  //     userServices
  //       .ajoutCommande(data)
  //       .then((res) => {
  //         if (res.status === 201) {
  //           return setCommandeValide("votre commande a bien ete envoyé");
  //         } else {
  //           console.log("toliba");
  //         }
  //       })
  //       .catch((err) => console.log(err.message));
  //     setTimeout(() => {
  //       setCommandeValide("");
  //     }, 5000);
  //   }
  // };

  const envoie = async () => {
    if (!userServices.isLogged()) {
      Navigate("/connexion");
    } else {
      const consome = await axios.post(
        "http://localhost:3000/api/commande/",
        data,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (consome.status === 201) {
        setCommandeValide("votre commande a bien ete envoyé");
        setTimeout(() => {
          setCommandeValide("");
        }, 5000);
      } else {
        console.log("toliba");
      }
    }
  };

  return (
    <>
      <div className="container_panier">
        {panier.length === 0 && (
          <div className="cadre_article">
            <div className="article_panier">
              <SlBasket className="vide" />
              <h1>Votre pannier est vide</h1>
            </div>
            <div className="retour">
              <Link to="/articles">retour vers les articles</Link>
            </div>
          </div>
        )}
        {commandeValide ? (
          <div className="validation">
            <p className="titre_mess">{commandeValide}</p>
            <p className="logo_grand">
              <GrValidate />
            </p>
          </div>
        ) : null}
        <div className="container_panier">
          <div className="section">
            <div className="section_petit_panier">
              {panier.map((p, index) => {
                return (
                  <div className="box" key={p.id}>
                    <div className="box_cadre">
                      <div className="box_img">
                        <img height="200px" width="50px" src={p.image} />
                      </div>
                      <div className="box_text">
                        <h3>
                          Nom : <span className="white">{p.nom}</span>
                        </h3>
                        <h4>
                          Prix : <span className="white">{p.price} FCFA</span>
                        </h4>
                      </div>
                      <div className="flex_panier">
                        <button
                          onClick={() => incrementer(p)}
                          className="incre"
                        >
                          +
                        </button>
                        <input
                          className="input_panier"
                          type="text"
                          value={p.quantity}
                          onChange={(e) =>
                            setPanier(
                              panier.map((m, i) =>
                                i === index
                                  ? { ...m, quantity: e.target.value }
                                  : m
                              )
                            )
                          }
                        ></input>

                        {p.quantity > 1 ? (
                          <button
                            onClick={() => decrementer(p)}
                            className="decre"
                          >
                            -
                          </button>
                        ) : (
                          <button disabled="disabled">-</button>
                        )}
                      </div>
                      <div className="ajout_total">
                        <h4>
                          Ajout totales :
                          <span className="white">
                            {p.price * p.quantity} FCFA
                          </span>
                        </h4>
                      </div>

                      <button className="supp" onClick={() => removeproduit(p)}>
                        <RiDeleteBin6Line className="icone_supp" />
                      </button>
                    </div>
                  </div>
                );
              })}
              {panier.length > 0 && (
                <>
                  <div className="retour_articles">
                    <Link to="/articles">
                      <p>ajoutez +</p>
                    </Link>
                  </div>
                  <div className="prix_panier">
                    <h3>{totalPrice} FCFA</h3>
                  </div>
                  <div className="div_commande">
                    <button className="btn_commande" onClick={() => envoie()}>
                      Commander
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PanierAchat;

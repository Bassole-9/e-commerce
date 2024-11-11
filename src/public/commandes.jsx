import "./cssPublic/commande.css";
import { apiService } from "../Api/api.call";

const Commandes = ({ liste, setListe }) => {
  const tok = localStorage.getItem("token");

  const modifier = (idCommande) => {
    apiService
      .updateComandes(idCommande)
      .then((res) => {
        setListe(
          liste.map((m) =>
            m._id === idCommande ? { ...m, annuler: res.message.annuler } : m
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(liste);

  return (
    <>
      <div className="container_commandes">
        {!tok ? (
          <div className="pasCo">
            <h1>Connecter vous pour voir vos commandes !!!</h1>
          </div>
        ) : (
          <div className="section_commandes">
            {liste.length === 0 ? (
              <h1 className="message">vous n'avez pas encore de commandes</h1>
            ) : (
              liste.map((m, index) => {
                return (
                  <div key={index}>
                    <div className="commandes1">
                      <div className="commandes_prix">
                        <div className="commande_images">
                          {m.objet.map((p, id) => {
                            return (
                              <div key={id} className="box_commande_map">
                                <div className="box_commande">
                                  <img
                                    height="100%"
                                    width="100%"
                                    src={p.image}
                                  />
                                </div>
                                <div className="descri_commandes">
                                  <div>{p.nom}</div>
                                  <div>quantité :{p.quantity}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="prix">
                          <p>
                            prix de commande <span>{m.total} FCFA</span>
                          </p>
                        </div>
                      </div>
                      <div className="btn_commandes">
                        {m.annuler === false ? (
                          <button
                            style={{ background: "green" }}
                            className="btn_annuler"
                            onClick={() => modifier(m._id)}
                          >
                            annuler commande
                          </button>
                        ) : (
                          <button
                            style={{ background: "red" }}
                            className="btn_annuler"
                            onClick={() => modifier(m._id)}
                          >
                            commande annuler
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Commandes;

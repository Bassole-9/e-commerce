import "./cssPublic/commande.css";
const Commandes = ({ liste }) => {
  return (
    <>
      <div className="container_commandes">
        {liste.length === 0 ? (
          <div className="pasCo">
            <h1>Connecter vous pour voir votre commandes</h1>
          </div>
        ) : (
          <div className="section_commandes">
            {liste.map((m, index) => {
              return (
                <div key={index}>
                  <div className="commandes1">
                    <div className="commandes_prix">
                      <div className="commande_images">
                        {m.objet.map((p, id) => {
                          return (
                            <div key={id} className="box_commande_map">
                              <div className="box_commande">
                                <img height="100%" width="100%" src={p.image} />
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
                        prix de commande :{m.total} FCFA
                      </div>
                    </div>
                  </div>
                  <div className="btn_commandes">
                    <button>annuler la commande</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Commandes;

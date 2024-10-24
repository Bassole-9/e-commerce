const ChaussureCard = ({ produit, ajoutez }) => {
    return (
      <div className="arti">
        <div className="img" height="1rem" width="2rem">
          <img height="100rem" src={produit.image} />
        </div>
        <p>
          Nom : <span className="white"> {produit.nom}</span>
        </p>
        <p>
          Pointure : <span className="white">{produit.pointure}</span>
        </p>
        <h2>prix: {produit.price} FCFA</h2>
        {/* donnee a envoyer dans la fonction ajoutez du panier qui est a la racine publicRoute */}
        <button className="cmd" onClick={() => ajoutez(produit)}>
          AJOUTEZ AU PANIER
        </button>
      </div>
    );
  };
  export default ChaussureCard;
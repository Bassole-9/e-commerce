const TelephoneCard = ({ produit, ajoutez }) => {
  return (
    <div className="arti">
      <div className="img" height="1rem" width="2rem">
        <img height="100rem" src={produit.image} />
      </div>
      <p>
        nom :<span className="white"> {produit.nom}</span>
      </p>
      <p>
        couleur :<span className="white"> {produit.couleur}</span>
      </p>
      <h2>prix:${produit.price}</h2>
      {/* donnee a envoyer dans la fonction ajoutez du panier qui est a la racine publicRoute */}
      <button className="cmd" onClick={() => ajoutez(produit)}>
        AJOUTEZ AU PANIER
      </button>
    </div>
  );
};
export default TelephoneCard;

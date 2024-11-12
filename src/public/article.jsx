import "./cssPublic/articles.css";
import ChaussureCard from "../component/ChaussureCard";
import ProduitCard from "../component/produitCard";
import TelephoneCard from "../component/telephoneCard";



const Article = ({ ajoutez, filteredSearch,filteredChaussure, filteredTelephone }) => {
  return (
    <>
      <div className="container_article">
        <div className="titre_article">
          <h1>Vetements</h1>
        </div>
        <div className="section">
          <div className="section_petit">
            {/* la div sur laquel on fait le overflow */}
            <div className="flo">
              {filteredSearch.map((prod, id) => {
                return (
                  <ProduitCard produit={prod} ajoutez={ajoutez} key={id} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="titre_article">
          <h1>Chaussures</h1>
        </div>
        <div className="section">
          <div className="section_petit">
            {/* la div sur laquel on fait le overflow */}
            <div className="flo">
              {filteredChaussure.map((prod, id) => {
                return (
                  <ChaussureCard produit={prod} ajoutez={ajoutez} key={id} />
                );
              })}
            </div>
          </div>
        </div>
        <div className="titre_article">
          <h1>Telephones</h1>
        </div>
        <div className="section">
          <div className="section_petit">
            {/* la div sur laquel on fait le overflow */}
            <div className="flo">
              {filteredTelephone.map((prod, id) => {
                return (
                  <TelephoneCard produit={prod} ajoutez={ajoutez} key={id} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Article;

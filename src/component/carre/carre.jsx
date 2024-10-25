import "./carre.css";

const Carre = ({ titre, image }) => {
  return (
    <>
      <div className="containerCar">
        <div className="grand_sectionCar">
          <div className="containerCar">
            <div className="petit_sectionCar">
              <img width="100%" height="100%" src={image}></img>
              <div className="plus">+</div>
            </div>
            <div className="titre_care">{titre}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Carre;

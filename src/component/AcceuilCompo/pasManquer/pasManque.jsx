import "./pasMan.css";

const PasManquer = ({ titreA, imageA }) => {
  return (
    <>
      <div className="containerRec">
        <div className="grand_sectionRec">
          <div className="centerRec">
            <div className="centerRectangle">
              <img width="100%" height="100%" src={imageA}></img>
            </div>
            <div>
              <p>{titreA}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PasManquer;

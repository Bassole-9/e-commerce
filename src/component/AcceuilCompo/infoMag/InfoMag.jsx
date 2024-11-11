import "./infoMag.css";

const InfoMag = ({ titreInfo, imageInfo }) => {
  return (
    <>
      <div className="containerCar">
        <div className="grand_sectionCar">
          <div className="containerCar">
            <div className="petit_sectionCar">
              <div className="box_chaussure">
                <img width="100%" height="100%" src={imageInfo}></img>
              </div>
            </div>
            <div>
              <p className="textCar">{titreInfo}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoMag;

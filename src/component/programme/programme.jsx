import "./programme.css";

const Programmer = ({ titreP, imageP }) => {
  return (
    <>
      <div className="containerDecouvert">
        <div className="grand_section">
          {/* <div className="trait">
            <div className="traitAbso"></div>
            <div className="rec">
              <p>heure</p>
              <p>GMT</p>
            </div>
          </div> */}
          <div className="centerPro">
            {/* <div className="couleur">
                            <p>{titreP}</p>
                        </div> */}

            <div className="petit_sectionP">
              <img
                className="img_programe"
                width="10%"
                height="10%"
                src={imageP}
              />
              <div>non</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Programmer;

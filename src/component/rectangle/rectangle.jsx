import"./rectangle.css"

const Rectangle =({titreRectangle,imageRectangle})=>{
    return(
        <>
            <div className="containerRec">
                <div className="grand_sectionRec">
                    <div className="centerRec">
                        <div className="centerRectangle">
                            <img width="100%" height="100%" src={imageRectangle}></img>
                            <p>{titreRectangle}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Rectangle
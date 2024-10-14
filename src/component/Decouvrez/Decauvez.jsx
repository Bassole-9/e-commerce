import"./decouvrez.css"

const Decouvrez =({titreRec,imageRec})=>{
    return(
        <>
            <div className="containerDecouvertD">
                <div className="grand_sectionD">
                    <div className="centerD">
                        <div className="petit_sectionD">
                            <img width="100%" height="100%" src={imageRec}/>
                        </div>
                        <div className="ecritureDecou">
                            <p>{titreRec}</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default Decouvrez
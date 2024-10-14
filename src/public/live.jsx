import Categorie from "../component/Categorie/categorie"
import Rectangle from "../component/rectangle/rectangle"
import { useState } from "react"
import "./cssPublic/live.css"
import Decouvrez from "../component/Decouvrez/Decauvez"






const Live = ()=>{
    const [decouvert,setDecouvert]=useState([
        {titre:"NCI NEWS",image:"https://www.positive.news/wp-content/uploads/2019/03/Sherwood-pines-ben-1311243-unsplash-1500x0-c-default.jpg"},
        {titre:"NCI NEWS",image:"https://www.positive.news/wp-content/uploads/2019/03/Sherwood-pines-ben-1311243-unsplash-1500x0-c-default.jpg"},
        {titre:"NCI NEWS",image:"https://storage.nci.ci/tv-shows/2a5e8aa8-a0ef-11ee-b607-0242ac13000b/7e1f3e43-5dc3-49ed-9cf7-e5983ba93414.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20240813%2Fafrica%2Fs3%2Faws4_request&X-Amz-Date=20240813T141735Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=069a1eb75ec5e7ca805b74fc1b676c572b12e99292a92f4e65741ce2af013a01"},
    ])

    const [video,setVideo]= useState ([
        {titre:"MA CAn celebration au plateaux",image:"https://www.positive.news/wp-content/uploads/2019/03/Sherwood-pines-ben-1311243-unsplash-1500x0-c-default.jpg"},
        {titre:"NCI, N°1 des audiences TV pour la CAN 2023",image:"https://cfvod.kaltura.com/p/5571652/sp/557165200/thumbnail/entry_id/1_sath57yl/version/100001/width/380"},
        {titre:"Interview Exclusive de Faé Émerse, Sélectionneur de l'équipe nationale de Côte d'ivoire",image:"https://cfvod.kaltura.com/p/5571652/sp/557165200/thumbnail/entry_id/1_w0psa3lm/version/100001/width/380"},
        {titre:"MA CAN_Célébration Treichville",image:"https://cfvod.kaltura.com/p/5571652/sp/557165200/thumbnail/entry_id/1_dlg88wsb/version/100001/width/380"},
        {titre:"MA CAN_ Célébration à l'INTERIEUR DU PAYS",image:"https://cfvod.kaltura.com/p/5571652/sp/557165200/thumbnail/entry_id/1_177t2lab/version/100001/width/380"},
        {titre:"MA CAN_ Jour de final NIGERIA VS CIV à EBIMPE",image:"https://cfvod.kaltura.com/p/5571652/sp/557165200/thumbnail/entry_id/1_168eo874/version/100001/width/380"},
        {titre:"MA CAN_Celebration à YOPOUGON",image:"https://cfvod.kaltura.com/p/5571652/sp/557165200/thumbnail/entry_id/1_31qo1xdj/version/100001/width/380"},
        {titre:"MA CAN_ celebration de la population de COCODY-2PLATEAUX",image:"https://cfvod.kaltura.com/p/5571652/sp/557165200/thumbnail/entry_id/1_gy6u536q/version/100001/width/380"},
        {titre:"Emission Fête La CAN avant la Finale",image:"https://cfvod.kaltura.com/p/5571652/sp/557165200/thumbnail/entry_id/1_hxvw7nna/version/100001/width/380"},
        {titre:"CELEBRATION REMISE DE MEDAILLES DIGITAL",image:"https://cfvod.kaltura.com/p/5571652/sp/557165200/thumbnail/entry_id/1_ny5u66sf/version/100001/width/380"},
        ])
    


    return(
        <>
        <div className="containerLi">
            <div className="section_Grandlive">
                <div className="section_petitLive1">
                    <video src=""></video>
                </div>
                <div className="section_petitLive1V">
                    <p>Vous suivez actuellement NCI en Direct !</p>
                </div>
                <div className>
                    <Categorie/>
                </div>
                <div className="section_petitLive1R">
                    {
                        video.map((r,id)=>{
                            return <Rectangle titreRectangle={r.titre} imageRectangle={r.image}key={id}/>
                        })
                    }
                </div>
                <div className="section_petitLive1D">
                    <h2>Découvrez aussi</h2>
                </div>
                <div className="section_petitLive1">
                    {
                        decouvert.map((d,id)=>{
                            return <Decouvrez titreRec ={d.titre} imageRec={d.image}/>
                        })
                    }
                </div>
                
            </div>
        </div>
        
        </>
    )
}
export default Live
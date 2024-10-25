import Axios from "./callerService";

const getComandes= async ()=>{
 const {data} = await Axios.get('/api/commande',{
        headers:{
            Authorization: localStorage.getItem("token")
        }
    })
    return data.commandes;
}




export const apiService={
    getComandes
}
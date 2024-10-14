import { Routes,Route } from "react-router-dom"
import{Inscription, Login} from"../Auth"

const AuthRouter=()=>{
    return(
        <>
            <Routes>
                <Route path="/inscription" element={<Inscription/>}/>
                <Route path="/connexion" element={<Login/>}/>
            </Routes>
        </>
    )
}
export default AuthRouter
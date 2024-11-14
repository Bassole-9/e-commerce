import Axios from "./callerService";

///recuperre dans la base de donnee
const getComandes = async () => {
  const data = await Axios.get("/api/commande", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
  if (data.status === 200) {
    return data.data.commandes;
  }
};

///modifier commandes dans la base de donnéé
const updateComandes = async (idCommande) => {
  const reponse = await Axios.put(
    `/api/commande/updateCommande/${idCommande}`,
    {},
    {
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    }
  );
  if (reponse.status === 201) {
    return reponse.data;
  }
};

///recuperer tous les utilisateurs dans ma base de donnée
const getUsers = async () => {
  const data = await Axios.get("/api/users/");
  return data.data.message 
};

///recuperer un utilisateurs dans ma base de donnée
const getUser= async(uid)=>{
  const data = await Axios.get("/api/users/"+uid)
  return data.data.message
}

///modifier un utilisateur dans ma BD
const updateUser= async(user)=>{
  const data = await Axios.put("/api/users/"+user._id)
  return data.data.message
}

//suppremer un utilisateur de ma bd
const deleteUser= async(uid)=>{
  const data = await Axios.delete("/api/users/"+uid)
  return data.data.message
}

///ajoutez un utilisateur dans ma Bd
const AjouterUser = (user) => {
  return Axios.post("/api/users/", user);
};

export const apiService = {
  getComandes,
  updateComandes,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  AjouterUser
};

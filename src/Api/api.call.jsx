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

///recuperer utilisateur dans ma base de donnée
const getUser = async () => {
  const data = await Axios.get("/api/users/");
  return data.data.message 
};

export const apiService = {
  getComandes,
  updateComandes,
  getUser,
};

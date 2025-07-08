import { useQuery } from "@tanstack/react-query"
import { Game } from "../entities"
import ApiClient from "../services/apiClient"

 const apiClient=new ApiClient<Game>(`/games`)
const usegameDetails = (id:string) => {
   
  return useQuery({
    queryKey:["games",id],
    queryFn:()=>apiClient.getGameDetails(id)
  })
}

export default usegameDetails
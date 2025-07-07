import { useQuery } from "@tanstack/react-query"
import { Game } from "../entities"
import ApiClient from "../services/apiClient"

const apiClient=new ApiClient<Game>("/games")
const usegames = () => {
  return useQuery({
    queryKey:["games"],
    queryFn:apiClient.getAll
  })
}

export default usegames
import { useQuery } from "@tanstack/react-query"
import { Game } from "../entities"
import ApiClient from "../services/apiClient"
import usegameStoreQuery from "../store"

const apiClient=new ApiClient<Game>("/games")
const usegames = () => {
  const gameQuery=usegameStoreQuery(s=>s.gameQuery)
  return useQuery({
    queryKey:["games",gameQuery],
    queryFn:()=>apiClient.getAll({
      params:{
        search:gameQuery.searchText,
        parent_platforms:gameQuery.platformId,
        genres:gameQuery.genreId,
        ordering:gameQuery.sortOrder
      }
    })
  })
}

export default usegames
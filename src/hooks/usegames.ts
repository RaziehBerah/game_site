import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { Game } from "../entities"
import ApiClient from "../services/apiClient"
import usegameStoreQuery from "../store"

const apiClient=new ApiClient<Game>("/games")
const usegames = () => {
  const gameQuery=usegameStoreQuery(s=>s.gameQuery)
  return useInfiniteQuery({
    queryKey:["games",gameQuery],
    queryFn:({pageParam=1})=>apiClient.getAll({
      params:{
        search:gameQuery.searchText,
        parent_platforms:gameQuery.platformId,
        genres:gameQuery.genreId,
        ordering:gameQuery.sortOrder,
        page:pageParam
      }
    }),
    initialPageParam:1,
    getNextPageParam:(previouspage,allpages)=>{
      if (previouspage.next) return allpages.length+1 
      return null
    }
  })
}

export default usegames
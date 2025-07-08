import ApiClient from "../services/apiClient"
import { Screenshot } from "../entities"
import { useQuery } from "@tanstack/react-query"

const usegameScreenShots = (id:number) => {
    const apiClient= new ApiClient<Screenshot>(`/games/${id}/screenshots`)
  return useQuery({
    queryKey:["screenshots",id],
    queryFn:apiClient.getAll
  })
}

export default usegameScreenShots
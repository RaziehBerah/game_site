import { useQuery } from '@tanstack/react-query'
import { Trailer } from '../entities'
import ApiClient from '../services/apiClient'

const useGameTrailers = (id:number) => {
    const apiClient=new ApiClient<Trailer>(`/games/${id}/movies`)
  return useQuery({
   queryKey:["trailers",id],
   queryFn:apiClient.getAll
  })
}

export default useGameTrailers
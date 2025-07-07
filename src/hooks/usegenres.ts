import React from 'react'
import ApiClient from '../services/apiClient'
import { Genre } from '../entities'
import { useQuery } from '@tanstack/react-query'

const apiClient= new ApiClient<Genre>("/genres")

const usegenres = () => {
  return useQuery({
    queryKey:["genres"],
    queryFn:apiClient.getAll,
    staleTime:Infinity
  })
}

export default usegenres
import React from 'react'
import ApiClient from '../services/apiClient'
import { Platform } from '../entities'
import { useQuery } from '@tanstack/react-query'
const apiClient=new ApiClient<Platform>("/platforms/lists/parents")
const useplatforms = () => {
  return useQuery({
    queryKey:["platforms"],
    queryFn:apiClient.getAll
  })
}

export default useplatforms
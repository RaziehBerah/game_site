import axios, { AxiosRequestConfig } from 'axios'
export interface FetchData<T>{
    count:number,
    next?:number
    results:T[]
}
const InstanceApiClient = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"6c742f570e6742a28719118bc9ce2ba4"
    }

 
})
   class ApiClient<T>{
        endpoint:string
        constructor(endpoint:string) {
          this.endpoint=endpoint  
        }

        getAll=(config:AxiosRequestConfig)=>InstanceApiClient.get<FetchData<T>>(this.endpoint,config).then(res=>res.data)
    }

export default ApiClient
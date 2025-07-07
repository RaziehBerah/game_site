import { create } from "zustand"

interface GameQuery{
genreId?:number,
platformId?:number,
sortOrder?:string,
searchText?:string
}

interface gameStorequery{
    gameQuery:GameQuery,
    setgenreId:(genreId:number)=>void,
    setplatformId:(platformId:number)=>void,
    setsortOrder:(sortOrder:string)=>void,
    setSearchText:(searchText:string)=>void
}

const usegameStoreQuery=create<gameStorequery>(set=>({
    gameQuery:{},
    setgenreId:(genreId)=>set(store=>({gameQuery:{...store.gameQuery,genreId}})),
    setplatformId:(platformId)=>set(store=>({gameQuery:{...store.gameQuery,platformId}})),
     setsortOrder:(sortOrder)=>set(store=>({gameQuery:{...store.gameQuery,sortOrder}})),
     setSearchText:(searchText)=>set(()=>({gameQuery:{searchText}}))
}))

export default usegameStoreQuery
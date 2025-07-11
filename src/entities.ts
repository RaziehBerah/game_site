export interface Platform{
    id:number,
    name:string,
    slug:string
}

export interface Publisher{
    id:number,
    name:string,
    slug:string
}

export interface Trailer{
    id:number,
    name:string,
    preview:string,
    data:{480:string, max:string}
}

export interface  Screenshot{
id:number,
image:string
}

export interface Game{
    id:number,
    name:string,
    slug:string,
    background_image:string,
    metacritic:number,
    parent_platforms:{platform:Platform}[],
    genres:Genre[],
    publishers:Publisher[]
    rating_top:number,
    description_raw:string
}

export interface Genre{
    id:number,
    name:string,
    slug:string,
    image_background:string
}

export interface Platform{
    id:number,
    name:string
}
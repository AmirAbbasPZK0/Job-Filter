
export interface Poster {
    company : string,
    logo : string,
    position : string,
    role : string,
    level : string,
    id : number
}

export interface PosterDetails extends Poster {
    languages : string[],
    location : string,
    tools : string[],
}
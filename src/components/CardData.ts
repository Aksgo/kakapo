export interface CardData{
    id : number;
    title : string;
    description : string;
    setTitle? : (title:string)=>void;
    setDescription? : (des:string)=>void;
};
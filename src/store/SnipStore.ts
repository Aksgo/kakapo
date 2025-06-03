import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import { CardData } from "../components/CardData";
export const useStore = create<CardData>()(
        persist(
            (set,get)=>({
            id: 0,
            title : "",
            description : "",
            setTitle: (title:string)=>set({title : title}),
            setDescription : (des:string)=>set({description: des}),
        }), 
        {name : "snip-data"},
    ),
)

useStore.persist.hasHydrated()
//useBoundStore.persist.hasHydrated()


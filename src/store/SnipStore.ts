import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import { CardData } from "../components/CardData";

interface SnipStore{
    snipData : CardData[];
    setSnipData : ()=>void;
};
export const useStore = create<SnipStore>()(
        persist(
            (set,get)=>({
            snipData:[],
            setSnipData : ()=>set(
                {snipData: [...get().snipData, {id:1, title:"test 1", description: "this is a test"}]}
            ),
        }), 
        {name : "snip-data"},
    ),
)

//useBoundStore.persist.hasHydrated()


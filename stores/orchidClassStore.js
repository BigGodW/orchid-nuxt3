import { defineStore } from "pinia";

export const useOrchidClassStore = defineStore('orchidClass',()=>{
    const orchidClassList = ref([])
    async function getOrchidClassList (){
        const {data:{value:{data:orchidClass}}} = await useMyFetch('/api/orchidclasses')
        orchidClassList.value = orchidClass
    }
    return {orchidClassList,getOrchidClassList}
})
export const useOrchidListStore = defineStore('orchidList',()=>{
    const orchidList = ref([])
    async function getOrchidList (){
        let url = 'https://server.orchids.com.cn/api/orchids?pagination[page]=1&pagination[pageSize]=12'
     
        const {data:{value:{data:orchids}}} = await useFetch(url,{
            query:{
              populate:"*"
            }
          })
          orchidList.value = orchids
    }
    async function  changeOrchidList(classID) {
        let url = 'https://server.orchids.com.cn/api/orchids?pagination[page]=1&pagination[pageSize]=12&filters[orchidclass][documentId][$eq]='+classID
        const {data} = await $myFetch(url,{
            query:{
              populate:"*"
            }
          })
          orchidList.value = data
        
    }
    return {orchidList,getOrchidList,changeOrchidList}
})
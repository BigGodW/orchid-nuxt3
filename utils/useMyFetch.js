export default function(url,obj){
    const config = useRuntimeConfig()
    return useFetch(url,{
        ...obj,
        baseURL:config.public.apiBase

    })
}
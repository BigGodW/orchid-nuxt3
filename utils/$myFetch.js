export default function(url,obj){
    const config = useRuntimeConfig()
    return $fetch(url,{
        ...obj,
        baseURL:config.public.apiBase

    })
}
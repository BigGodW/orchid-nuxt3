export default function(url,config){
    const config = useRuntimeConfig()
    return useFetch(url,{
        ...config,
        baseURL:config.baseURL
    })
}
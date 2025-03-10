<template>
    <div class="flex justify-between items-center sticky h-12 px-2 bg-slate-50 top-0 z-50" >
        <div class="flex justify-center items-center ">
            <BaseIcomfont iconname="icon-fanhui" myclass="text-2xl"></BaseIcomfont>
            <span @click="$router.back()">返回</span>
        </div>
        <div class="flex justify-center items-center " @click="share()">
            <BaseIcomfont iconname="icon-response" myclass="text-2xl"></BaseIcomfont>
        </div>
        
    </div>
</template>
<script setup>
const router = useRouter()
const share = ()=>{
    console.log('share')
    if(navigator?.share){
        navigator.share({
            title:"web",
            url:document.querySelector('link[rel=canonical]') ?
  document.querySelector('link[rel=canonical]').href :
  document.location.href,
            text:'测试'
        })
    }
}
</script>
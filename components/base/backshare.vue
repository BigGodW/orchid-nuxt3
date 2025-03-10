<template>
    <div class="flex justify-between items-center sticky h-12 px-2 bg-slate-50 top-0 z-50">
        <div class="flex justify-center items-center ">
            <BaseIcomfont iconname="icon-fanhui" myclass="text-2xl"></BaseIcomfont>
            <span @click="back()">返回</span>
        </div>
        <div class="flex justify-center items-center " @click="share()">
            <BaseIcomfont iconname="icon-response" myclass="text-2xl"></BaseIcomfont>
        </div>

    </div>
</template>
<script setup>
const router = useRouter()
const share = () => {
    console.log('share')
    if (navigator?.share) {
        navigator.share({
            title: document.title,
            url: document.querySelector('link[rel=canonical]') ?
                document.querySelector('link[rel=canonical]').href :
                document.location.href,
            text: document.title
        })
    }
}
const back = ()=>{
    if (window.history.length > 1) {
    router.go(-1);
  } else {
    // 处理首页跳转失败的情况
    window.location.href = '/'; // 强制跳转
  }
}
</script>
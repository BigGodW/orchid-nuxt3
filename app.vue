<template>
  <div>
    <div class=" bg-slate-50 text-black">
      <NuxtLayout>
        <NuxtPage></NuxtPage>
      </NuxtLayout>
    </div>
  </div>
</template>
<style>

</style>
<script setup>
useHead({
    script: [{ src: "https://at.alicdn.com/t/c/font_4842723_51f9txm4sx2.js" }],
    title:'中国兰花博览园官网',
    meta: [
    { name: 'description', content: '兰花 中国兰花 国兰 春兰 春剑 莲瓣兰 蕙兰' },
    { name: 'baidu-site-verification', content: 'codeva-FIVbQWDHKR' },
  ],

})
// seo
useSeoMeta({
  title: '中国兰花博览园',
  ogTitle: '中国兰花博览园',
  description: '四川兰花博览园 – 打造西南地区信息最广、最全面、最真实的信息兰花资源共享平台',
  ogDescription: '引领兰花市场、弘扬国兰文化、推动兰花产业的蓬勃发展',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

const orchidClassStore = useOrchidClassStore()
orchidClassStore.getOrchidClassList()

const orchidList = useOrchidListStore()
orchidList.getOrchidList()
</script>
<template>
    <div class="font-medium">
        <h1 class="text-center text-2xl p-2">《{{ orchid.name }}》 - {{ orchid.orchidclass.title }}</h1>
        <div class="  rounded-lg overflow-hidden p-2">
            <UCarousel class="" :items="imglist" arrows indicators
                :ui="{ item: ' basis-full  aspect-square ' }">
                <template v-slot="{ item }" class="relative">
                    <img class="object-cover rounded-lg w-full h-full" :src="config.public.apiBase + item.url" alt="">
                </template>
            </UCarousel>
        </div>
        <div class="py-1">
            <div class="flex  items-center m-2">
                <span class="w-16 flex-none">类型</span>
                <div>
                    <UBadge color="sky" class="mr-2" v-for="item in orchid.orchidtypes">{{ item.title }}</UBadge>
                </div>
            </div>
            <div v-for="item in list" class="flex justify-center items-center m-2">
                <span class="w-16 flex-none">{{ item.name }}</span>
                <UAlert :title="item.value"></UAlert>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'backshare'
})
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${orchid.name}-${titleChunk}` : orchid.name;
  }
})
const route = useRoute()
const id = route.params.id
const config = useRuntimeConfig()
const url = `/api/orchids/` + id
    + '?populate[0]=cover'
    + '&populate[1]=orchidclass'
    + '&populate[2]=orchidtypes'
    + '&populate[3]=imgs'
    + '&populate[11]=imgs.img1'
    + '&populate[12]=imgs.img2'
    + '&populate[13]=imgs.img3'
    + '&populate[14]=imgs.img4'
    + '&populate[15]=imgs.img5'
const { data: { value: { data: orchid } } } = await useMyFetch(url)
const imglist = ref([])
for (let i = 1; i < 6; i++) {
    if (orchid.imgs['img' + i]) {
        imglist.value.push(orchid.imgs['img' + i])
    }
}
const list = ref([])
list.value.push({ name: "描述", value: orchid.description })
list.value.push({ name: "特点", value: orchid.characteristic })
list.value.push({ name: "历史", value: orchid.history })
list.value.push({ name: "产地", value: orchid.provenance })
list.value.push({ name: "培育者", value: orchid.grower })
</script>
<script setup>
const { data: { value: { data: list } } } = await useFetch('https://server.orchids.com.cn/api/slides', {
    query: {
        populate: "*"
    }
})
const config = useRuntimeConfig()
</script>
<template>
    <div class="flex">
        <UCarousel class="bg-red-200" :items="list" :ui="{ item: ' basis-full aspect-video rounded-lg overflow-hidden ' }"
            arrows indicators>
            <template v-slot="{ item }" class="relative">
                <NuxtLink :to="item.href" class="w-full">
                    <img class="object-cover w-full h-full" :src="config.public.apiBase + item.img.url" alt="">
                    <h1 class=" bg-slate-400/30 text-left text-2xl p-2 absolute top-0 w-full">{{ item.title }}</h1>
                </NuxtLink>
            </template>
        </UCarousel>
        <div class=" bg-blue-400 ">
            box
        </div>
    </div>
</template>
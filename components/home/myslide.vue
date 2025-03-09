<script setup>
const { data: { value: { data: list } } } = await useMyFetch('/api/slides',{query:{populate:"*"}})
const config = useRuntimeConfig()
</script>
<template>
    <div class="flex justify-center lg:justify-between">
        <UCarousel class=" max-w-3xl " :items="list" arrows indicators
            :ui="{ item: ' basis-full aspect-video rounded-lg overflow-hidden ' }" >
            <template v-slot="{ item }" class="relative">
                <NuxtLink :to="item.href" class="w-full">
                    <img class="object-cover w-full h-full" :src="config.public.apiBase + item.img.url" alt="">
                    <h1 class=" bg-slate-400/30 text-left text-2xl p-2 absolute top-0 w-full">{{ item.title }}</h1>
                </NuxtLink>
            </template>
        </UCarousel>

        <OnlyPc class="w-full">
            <div class=" bg-blue-400  h-full">
                <h1>最新新闻列表</h1>
            </div>
        </OnlyPc>
    </div>
</template>
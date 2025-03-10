<script setup>
const { data: { value: { data: list } } } = await useMyFetch('/api/slides',{query:{populate:"*"}})
const config = useRuntimeConfig()
</script>
<template>
    <div class="flex justify-center lg:justify-around items-center">
        <UCarousel class=" max-w-3xl " :items="list" arrows indicators
            :ui="{ item: ' basis-full aspect-video rounded-lg overflow-hidden ' }" >
            <template v-slot="{ item }" class="relative">
                <NuxtLink :to="item.href" class="w-full">
                    <img class="object-cover w-full h-full" :src="config.public.apiBase + item.img.url" alt="">
                    <h1 class=" bg-white/60 text-left text-xl flex  items-center text-slate-600 p-1 absolute top-0 w-full">
                        {{ item.title }}
                        <BaseIcomfont iconname="icon-sign-board" myclass="text-2xl"></BaseIcomfont>
                    </h1>
                </NuxtLink>
            </template>
        </UCarousel>

        <OnlyPc class="w-full lg:w-96">
            <div class="">
                <BaseArticleitem v-for="i in 4"></BaseArticleitem>
            </div>
        </OnlyPc>
    </div>
</template>
<template>
    <NuxtLink :to="'/orchid/'+ documentId" class="m-1">
        <div class="w-full aspect-square bg-slate-300 rounded-md overflow-hidden relative">
            <img :src="config.public.apiBase + cover.url" class="w-full h-full object-cover" alt="">
            <div class="absolute bottom-0 right-0">
                <UBadge v-for="item in orchidtypes" class=" float-right m-1">{{ item.title }}</UBadge>
            </div>
        </div>
        <h1 class="text-center">{{ name }} 《{{orchidclass.title}}》</h1>
    </NuxtLink>
</template>
<script setup>
const props = defineProps(['name','cover','orchidclass','orchidtypes','documentId'])
const config = useRuntimeConfig()

</script>
<template>
    <div class="m-1">
        <div class="w-full aspect-square bg-slate-300 rounded-md relative">
            <img src="" class="w-full h-full object-cover" alt="">
            <UBadge class=" absolute top-0 right-0">素花</UBadge>
        </div>
        <h1>title</h1>
        <p>type</p>
    </div>
</template>
<script setup>
const {data:{value:{data:orchid}}} = await useMyFetch('api/orchids/a5kjktqlmtksgdcs36hkla0f',{query:{populate:"*"}})
console.log(orchid)

</script>
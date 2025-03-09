<template>
    <div class="flex justify-between items-center sticky h-12 bg-slate-50 top-0 z-50" >
        <span @click="$router.back()">返回</span>
        <span>分享</span>
    </div>
</template>
<script setup>
const router = useRouter()
</script>
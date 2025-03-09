<template>
    <div class="flex m-1">
        <div class=" aspect-image bg-blue-500 w-36 flex-none rounded-lg overflow-hidden m-1">
            <img class="w-full object-cover h-full" src="https://server.orchids.com.cn/uploads/_280fc9781b.jpg" alt="">
        </div>
        <div class="flex flex-col justify-center m-2">
            <h1>title</h1>
            <p class=" line-clamp-2">天府兰谷项目规划天府兰谷项目规划天府兰谷项目规划天府兰谷项目规划天府兰谷项目规划</p>
            <div class="flex justify-between">
                <p>点赞</p>
                <p>评论</p>
                <p>分享</p>
            </div>
        </div>
    </div>
</template>
<script setup>
const porps = defineProps(['title','description','imgsrc'])

</script>
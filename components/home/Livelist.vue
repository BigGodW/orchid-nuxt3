<template>
    <div>
        <div class="flex p-1 *:shadow-sm *:rounded-md *:m-1 justify-center w-full">
            <div class="w-24 flex-none h-36 text-white flex flex-col justify-between
            bg-gradient-to-b from-blue-500 relative rounded-md m-1 p-2
            ">
                <div >
                    <h1 class="flex"><span>直播Live</span> <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
</span></h1>
                <p class="text-[12px]">19:00--23:00</p>
                </div>
                <p class="text-center">
                    <a href="https://live.douyin.com/215450079114"
                    class="border rounded-full px-2 bg-blue-400 text-[14px] text-white animate-bounce">去看直播</a>
                </p>
                <svg class="icon text-[60px] opacity-50 absolute top-14 right-2" aria-hidden="true">
                    <use xlink:href="#icon-lan"></use>
                </svg>
            </div>
            <div class="flex flex-col justify-center flex-1 relative bg-slate-200 p-2  ">
                <div class="">
                    <h1 class="text-[16px] ml-2 font-bold">官方社交平台 一键关注</h1>
                    <div class="flex items-center text-[12px] ml-2 my-1 ">
                        <p>兰花博览园 </p>
                    <svg class="icon text-[24px] text-amber-500" aria-hidden="true">
                        <use xlink:href="#icon-assessed-badge"></use>
                    </svg>
                    </div>

                </div>
                <BaseIcomfont iconname="icon-gufengxiangyunyunduo4" myclass="absolute -top-5 right-0 text-6xl"></BaseIcomfont>
                <div class=" flex   text-[14px] *:text-center justify-between
                *:flex *:flex-col *:items-center
                ">
                    <NuxtLink to="https://v.douyin.com/i5k1aWEw/">
                        <p>抖音</p>
                        <svg class="icon text-[50px]" aria-hidden="true">
                            <use xlink:href="#icon-douyin-01"></use>
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="https://v.kuaishou.com/m5TPfX">
                        <p>快手</p>
                        <svg class="icon text-[50px]" aria-hidden="true">
                            <use xlink:href="#icon-kuaishou"></use>
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="https://mp.weixin.qq.com/s/N5KxyF9SJgurfLZ1xi1v1Q">
                        <p>公众号</p>
                        <svg class="icon text-[50px]" aria-hidden="true">
                            <use xlink:href="#icon-weixin"></use>
                        </svg>
                    </NuxtLink>
                    <NuxtLink to="https://m.weibo.cn/u/3191429765">
                        <p>微博</p>
                        <svg class="icon text-[50px]" aria-hidden="true">
                            <use xlink:href="#icon-weibo"></use>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


</script>

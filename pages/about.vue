<template>
  <div>
    <div>
      <h1 class="text-center text-2xl">兰花博览园发展历程</h1>
      <img class="w-full rounded-[25px] p-2" src="https://server.orchids.com.cn/uploads/_280fc9781b.jpg" alt="">
      <ul class="timeline timeline-vertical ">
        <template v-for="item in list">
          <li class=" ">
            <hr />
            <div class="timeline-start timeline-box  ">
              <h2>{{ item.title }}</h2>
              <h3>{{ item.descrption }}</h3>
            </div>
            <div class="timeline-middle">
              <BaseIcomfont iconname="icon-location-fill" myclass="text-3xl text-blue-400"></BaseIcomfont>
            </div>
            <hr />
          </li>
          <li class="">
            <hr />
            <div class="timeline-middle">
              <BaseIcomfont iconname="icon-location-fill" myclass="text-3xl text-blue-400"></BaseIcomfont>
            </div>
            <div class="timeline-end timeline-box">
              <h2>{{ item.title }}</h2>
              <h3>{{ item.descrption }}</h3>
            </div>
            <hr />
          </li>

        </template>

      </ul>
    </div>
  </div>
</template>
<script setup>
const list = ref([
  { title: '1980年代', descrption: "开始收集各类新稀有兰花资源" },
  { title: '1998年', descrption: "创办《中国兰花在线》网站" },
  { title: '2001年', descrption: "创办《中国兰花》网站" },
  { title: '2002年', descrption: "注册西部兰花公司，筹备策划《西部兰花》、《西部兰艺》杂志" },
  { title: '2007年', descrption: "设立免费移动短信平台" },
  { title: '2009年', descrption: "成立四川博览兰花有限公司，打造中国兰花博览园" },
  { title: '2019年', descrption: "组建线上直播团队，抖音、快手、视频号等短视频" },
  { title: '2025年', descrption: "筹备《天府兰谷》项目" },
])

</script>
<style scoped></style>

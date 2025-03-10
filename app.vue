<template>
  <div>
    <div class=" bg-slate-50 text-black">
      <NuxtLayout>
        <NuxtPage></NuxtPage>
      </NuxtLayout>
    </div>
  </div>
</template>
<style>

</style>
<script setup>
useHead({
    script: [{ src: "https://at.alicdn.com/t/c/font_4842723_51f9txm4sx2.js" }]
})
const orchidClassStore = useOrchidClassStore()
orchidClassStore.getOrchidClassList()

const orchidList = useOrchidListStore()
orchidList.getOrchidList()
</script>
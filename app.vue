<template>
  <div>
    <div class="">
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
    script: [{ src: "https://at.alicdn.com/t/c/font_4842723_w9whaduuft.js" }]
})
const orchidClassStore = useOrchidClassStore()
orchidClassStore.getOrchidClassList()

const orchidList = useOrchidListStore()
orchidList.getOrchidList()
</script>
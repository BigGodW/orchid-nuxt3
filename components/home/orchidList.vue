<script setup>

const orchidListStore = useOrchidListStore()


</script>
<template>
    <div class=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
      
      <BaseOrchiditem v-bind="orchid" v-for="orchid in orchidListStore.orchidList" :key="orchid.id"></BaseOrchiditem>
    </div>
    <div v-if="orchidListStore.orchidList.length ==0" class=" w-full aspect-square flex justify-center items-center">
          <p>无相关数据</p>
      </div>
</template>
<template>
    <div>
        <UCarousel :items="orchidClassStore.orchidClassList" >
            <template class=""   :key="item.documentId" v-slot="{item}">
                <div class="flex justify-center items-center m-1 border border-blue-100/0 rounded-md  divide-double" @click="changeOrchidList(item.documentId)"
                :class="{'border-yellow-500':activeIndex == item.documentId}"
                >
                    <BaseIcomfont iconname="icon-zhongguofengbiankuang121"></BaseIcomfont>
                <button class="" >{{ item.title }}</button>
                <BaseIcomfont iconname="icon-zhongguofengbiankuang12"></BaseIcomfont>
                </div>
            </template>
        </UCarousel>

    </div>
</template>
<script setup>
const activeIndex = ref(0)
const orchidClassStore = useOrchidClassStore()
const orchidListStore = useOrchidListStore()
const changeOrchidList = (index)=>{
    console.log(index)
    activeIndex.value = index
    orchidListStore.changeOrchidList(index)
}

</script>
<template>
    <div>
        <UCarousel :items="orchidClassStore.orchidClassList" >
            <template :key="item.documentId" v-slot="{item}">
                <button class="px-1 m-1 border rounded-md" @click="changeOrchidList(item.documentId)" >{{ item.title }}</button>
            </template>
        </UCarousel>

    </div>
</template>
<script setup>
const orchidClassStore = useOrchidClassStore()
const orchidListStore = useOrchidListStore()
const changeOrchidList = (index)=>{
    console.log(index)
    orchidListStore.changeOrchidList(index)
}

</script>
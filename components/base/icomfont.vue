<template >
    <svg class="icon" :class="myclass" aria-hidden="true">
        <use :xlink:href="'#'+ iconname"></use>
    </svg>
</template>
<script setup>
 const props =  defineProps(['iconname','myclass'])
</script>

<script setup lang="ts"></script>

<template>
  <div class=" relative">
    <TheHeader></TheHeader>
    <slot />
    <TheFooter></TheFooter>
    <OnlyPhone class="h-16"></OnlyPhone>
    <OnlyPhone class=" bg-slate-50 h-16 fixed bottom-0 w-full">
      <HomePhoneNav></HomePhoneNav>
    </OnlyPhone>

  </div>
</template>

<style></style>

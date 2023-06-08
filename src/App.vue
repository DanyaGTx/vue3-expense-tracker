<template>
  <div class="max-w-[1024px] m-auto min-h-screen flex flex-col justify-between">
    <router-view></router-view>
    <NavigationComponent></NavigationComponent>
  </div>
</template>

<script setup>
import NavigationComponent from './components/NavigationComponent.vue'
</script>

<style lang="scss" scoped></style>

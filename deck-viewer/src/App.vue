<script setup>
import NavBar from "./components/NavBar.vue";
import DeckFetch from "./components/DeckFetch.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <NavBar msg="ManaFesto" />
  <RouterView></RouterView>
</template>

<style scoped></style>

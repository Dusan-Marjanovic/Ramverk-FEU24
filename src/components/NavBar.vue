<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div>
    <router-link class="logo" :to="'/'">
      <h1>{{ msg }}</h1>
    </router-link>
  </div>
</template>

<style scoped>
.logo {
  text-decoration: none;
}
h1 {
  text-align: center;
  margin: 3rem 1rem;
  color: black;
  user-select: none;
}
</style>

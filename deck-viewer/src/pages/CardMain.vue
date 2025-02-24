<template>
  <div class="card-view-section">
    <CardFetch class="card" />
    <DeckFetch class="deck" />
  </div>
</template>

<script>
import CardFetch from "/src/components/CardFetch.vue";
import DeckFetch from "../components/DeckFetch.vue";
export default {
  name: "CardMain",
  components: {
    CardFetch,
    DeckFetch,
  },
};
</script>

<style scoped>
.card-view-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.card {
  width: 15vw;
}
.deck {
  width: 50vw;
}
@media (max-width: 800px) {
  .card-view-section {
    flex-direction: column;
  }
  .deck {
    width: 80vw;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 6rem;
  }
  .card {
    margin-top: 3rem;
    padding: 0.2rem;
    top: auto;
    width: 60vw;
    margin: auto;
  }
}
</style>

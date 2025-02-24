<template>
  <div class="deck-view-section">
    <div class="about">
      <h1>Min MTG deck!</h1>
      <p>
        Magic The Gathering (MTG) är ett kortspel och följande lista är min
        kortlek.
      </p>
      <p>Klicka på ett kort för att se mer info.</p>
    </div>
    <DeckFetch class="deck" />
  </div>
</template>

<script>
import DeckFetch from "../components/DeckFetch.vue";

export default {
  name: "DeckMain",
  components: {
    DeckFetch,
  },
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}
.deck-view-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.about {
  padding: 2rem;
  border-radius: 1rem;
  width: 15vw;
  height: fit-content;
  position: sticky;
  top: 40vh;
  background-color: #f5e9ef;
}
.deck {
  width: 50vw;
}
@media (max-width: 800px) {
  .deck-view-section {
    flex-direction: column;
  }
  .deck {
    width: 80vw;
    margin: auto;
    margin-top: 3rem;
    margin-bottom: 6rem;
  }
  .about {
    margin-top: 3rem;
    padding: 0;
    top: 0;
    width: 80vw;
    margin: auto;
  }
}
</style>

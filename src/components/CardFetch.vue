<template>
  <div class="card-section">
    <img v-if="card" :src="card.image_uris.normal" class="card-img" />
    <h2 v-if="card">{{ card.name }}</h2>
    <p v-if="card">{{ card.oracle_text }}</p>
    <a v-if="card" :href="card.scryfall_uri" target="_blank"
      ><button>Read more</button>
    </a>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "CardFetch",
  data() {
    return {
      card: null,
    };
  },

  mounted() {
    //fetch card on load
    const cardName = this.$route.params.cardName;
    this.fetchCard(cardName);
  },
  //fetch new card when cardName changes
  watch: {
    "$route.params.cardName"(newCardName) {
      this.fetchCard(newCardName);
    },
  },
  methods: {
    fetchCard(cardName) {
      fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
        .then((response) => response.json())
        .then((data) => {
          this.card = data;
        });
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 0.5rem;
  width: 100%;
  scale: 0.9;
  object-fit: cover;
}

h2 {
  margin: 0.5rem 0;
}

button {
  width: 100%;
  border: solid 2px rgb(141, 17, 85);
  color: rgb(141, 17, 85);
  border-radius: 0.5rem;
  margin-top: 1rem;
  padding: 0.3rem;
  background-color: #f5e9ef;
  transition: 0.3s;
  font-size: 1rem;
}
button:hover {
  background-color: rgb(141, 17, 85);
  color: #f5e9ef;
}
.card-section {
  padding: 2rem;
  border-radius: 1rem;
  width: 18vw;
  height: fit-content;
  position: sticky;
  top: 2vh;
  background-color: #f5e9ef;
}
</style>

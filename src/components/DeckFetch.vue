<template>
  <div class="deck-container">
    <div v-for="(group, index) in groupedDeck" :key="index" class="deck-column">
      <h3 class="type-header">
        {{ this.capital(group.type) }}
      </h3>
      <ul class="card-list">
        <li class="card-item" v-for="card in group.cards" :key="card.name">
          <span class="card-amount"> {{ card.count }}</span>
          <router-link :to="'/' + encodeURIComponent(card.name)">
            {{ card.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "FetchDeck",
  data() {
    return {
      deck: [],
    };
  },
  computed: {
    //make arrays for each different type
    groupedDeck() {
      const groups = {};
      this.deck.forEach((card) => {
        if (!groups[card.type]) {
          groups[card.type] = [];
        }
        groups[card.type].push(card);
      });

      return Object.keys(groups).map((type) => ({
        type,
        cards: groups[type],
      }));
    },
  },
  methods: {
    fetchDeck() {
      fetch(`/deck.json`)
        .then((response) => response.json())
        .then((result) => {
          this.deck = result.deck;
        });
    },
    //capitalize first letter
    capital(string) {
      return string ? string[0].toUpperCase() + string.slice(1) : "";
    },
  },
  created() {
    this.fetchDeck();
  },
};
</script>

<style scoped>
.deck-container {
  width: 100vw;
  column-width: 250px;
  margin-bottom: 20vh;
}
.deck-column {
  break-inside: avoid;
}
.type-header {
  margin: 1.3rem 0 0.6rem 0.5rem;
  font-weight: bold;
  user-select: none;
}
.new-group {
  margin-top: 1.3rem;
  padding-top: 10px;
}
ul {
  text-align: left;
}
.card-item {
  list-style: none;
  user-select: none;
  border-top: solid 2px rgba(141, 17, 85, 0.068);
  padding: 0.3rem;
}
a {
  color: black;
  text-decoration: none;
  user-select: none;
  transition: 0.3s;
}
a:hover {
  color: rgb(141, 17, 85);
}
.card-amount {
  margin-right: 0.3rem;
  user-select: none;
}
</style>

<template>
  <div class="wrapper">
    <div class="pokemonList">
      <div class="pokemon" v-for="pokemon in pokemonList" :key="pokemon.id">
        <div class="info">
          <h1>{{ pokemon.id }}: {{ pokemon.name }}</h1>
        </div>
        <div class="image">
          <img :src="'/pokedex-images/' + pokemon.name + '.png'" />
        </div>
        <div v-if="partyIsFull()">
          <div v-if="notInParty(pokemon)">
            <div class="button">
              <button
                class="button-disabled auto"
                v-on:click="addToParty(pokemon)"
                disabled
              >
                Add to Party
              </button>
            </div>
          </div>
          <div v-else>
            <div class="button">
              <button v-on:click="removeFromParty(pokemon)" class="auto">
                Remove from Party
              </button>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-if="notInParty(pokemon)">
            <div class="button">
              <button v-on:click="addToParty(pokemon)" class="auto">
                Add to Party
              </button>
            </div>
          </div>
          <div v-else>
            <div class="button">
              <button v-on:click="removeFromParty(pokemon)" class="auto">
                Remove from Party
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: {
    pokemonList: Array,
  },
  methods: {
    addToParty(pokemon) {
      this.$root.$data.party.push(pokemon);
    },
    notInParty(pokemon) {
      return !this.$root.$data.party.includes(pokemon);
    },
    removeFromParty(pokemon) {
      this.$root.$data.party = this.$root.$data.party.filter(
        (e) => e !== pokemon
      );
    },
    partyIsFull() {
      return this.$root.$data.party.length >= 6;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pokemonList {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pokemon {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.pokemon img {
  height: 250px;
  width: 250px;
  object-fit: cover;
}
.pokemon .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.info {
  background: #f2921d;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 10px;
}
.button {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.button-disabled {
  background: #bcbcbc;
  color: #5b5b5b;
}

.auto {
  margin-left: auto;
}
</style>

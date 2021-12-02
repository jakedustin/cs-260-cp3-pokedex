<template>
  <div>
    <div>
      <PokemonList :pokemonList="pokemonList" />
    </div>
  </div>
</template>

<script>
import PokemonList from "../components/PartyList.vue";
export default {
  name: "Home",
  components: {
    PokemonList,
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    pokemonList() {
      return this.$root.$data.party;
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

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>

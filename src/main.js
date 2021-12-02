import App from "./App.vue";
import Vue from "vue";
import pokedex from "./pokemon.json";
import router from "./router";

let data = {
  pokemonList: pokedex,
  party: [],
};

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");

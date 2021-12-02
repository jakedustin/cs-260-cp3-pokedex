<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/logo.png" />
        </router-link>
      </div>
      <div id="side">
        <router-link to="/">
          <div class="menu-item pokedex">
            <img class="book-image" src="/images/book.png" />
            <p>Pokédex</p>
          </div>
        </router-link>
        <router-link to="/party">
          <div class="menu-item">
            <img src="/images/school-bag.png" />
            <p>Party ({{ partyMembers }})</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />

    <div class="footer">
      <a href="github.com/jakedustin/cs-260-cp3-pokedex" class="footer-text"
        ><p>github</p></a
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    partyMembers() {
      return this.$root.$data.party.length;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #b84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}

.menu-item p {
  margin: 0px;
}

.pokedex {
  margin-right: 50px;
}

.book-image {
  height: 45px;
  width: 36px;
  margin-top: 5px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #0b5f6f;
  color: #e6eff0;
  text-align: center;
}

.footer-text {
  text-decoration: none;
  color: #e6eff0;
}
</style>

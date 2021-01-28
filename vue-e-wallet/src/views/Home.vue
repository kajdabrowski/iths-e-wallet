<template>
  <div class="Home">
    <Top title="E-WALLET" subtitle="Active Card"></Top>
    <Card :card="card" ></Card>
    <CardStack @chosenCard="setActiveCard"/> 
    <router-link class="cta-add-btn2" to="/addcard">ADD A NEW CARD</router-link>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Top from "../components/Top.vue";
import CardStack from "../components/CardStack.vue";

export default {
  computed: {
    card() {
      return this.$root.cards[this.cardindex];
    },
  },

  data() {
    return {
      cardindex: 0,
    };
  },

  methods: {
    setActiveCard(value) {
      this.cardindex = value;
    
    },
  },

  name: "Home",
  components: { CardStack, Top, Card },
};
</script>

<style scoped lang="scss">
.Home {
  display: grid;
  place-items: center;
}

.cta-add-btn2 {
  margin-top: 250px;
  margin-bottom: 50px;
  display: grid;
  place-items: center;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 20px;
  color: black;
  height: 50px;
  width: 500px;
  background-color: white;
  font-weight: bold;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
    background-color: black;
    color: white;
  }
}
</style>

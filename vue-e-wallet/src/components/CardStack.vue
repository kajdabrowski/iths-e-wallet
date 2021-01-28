<template>
  <div class="cardstack">
    <Card
      :class="index===cardArray.length-1 ? 'cardstackcards__notcompressed' : 'cardstackcards'"
      v-for="(card, index) in cardArray"
      v-bind:key="card.id"
      v-bind:card="card"
      @click="cardClick(index)" 
    >

    </Card>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  computed: {
    cardArray() {
      return this.$root.cards;
    },
  },

  components: { Card },

  emits: ["chosenCard"], //Emits behöver endast registreras i Vue3. 

  methods: {
    cardClick(value) {
      this.$emit("chosenCard", value);
    },
  },

  data() {
    return {
      card: {
        number: "",
        holder: "",
        valid: "MM/YY",
      },
    };
  },
};
</script>

<style scoped lang="scss">

.cardstack {
  display: grid;
  grid-auto-rows: 4rem; 
  margin-top: 5rem;
  
}

.cardstackcards{
  max-height: 6rem;
  overflow: hidden; 
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

}

.cardstackcards__notcompressed{
  max-height: 275px;

}
</style>
<template>
  <div class="card" v-bind:class="getCardStyle"> 
    <img class="chip" v-if="card.vendor==='bitcoin'" src="../assets/chip-dark.svg" alt="chip img" />
    <img class="chip" v-else src="../assets/chip-light.svg" alt="chip img" />
    <img class="vendor-img" v-if="card.vendor==='bitcoin'" src="../assets/vendor-bitcoin.svg" alt="vendor-img" />
    <img class="vendor-img" v-else-if="card.vendor==='blockchain'" src="../assets/vendor-blockchain.svg" alt="vendor-img" />
    <img class="vendor-img" v-else-if="card.vendor==='evil corp'" src="../assets/vendor-evil.svg" alt="vendor-img" />
    <img class="vendor-img" v-else-if="card.vendor==='ninja bank'" src="../assets/vendor-ninja.svg" alt="vendor-img" />
    
    

    <p class="card-number">{{ spaceCardNumber }}</p>
    <p class="cardholder-name">CARDHOLDER NAME</p>
    <p class="first-last">{{ card.holder }}</p>
    <p class="valid-thru">VALID THRU</p>
    <p class="month-year">{{ card.validMonth}}/{{card.validYear}}</p>
  </div>
</template>

<script>
export default {
  
  props:  {
    card: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      
    };
  },

  computed: {
    getCardStyle() {

      if (this.card.vendor === "bitcoin") {
        return "bitcoin";
      } else if (this.card.vendor === "blockchain") {
        return "blockchain";
      } else if (this.card.vendor === "evil") {
        return "evil";
      } else if (this.card.vendor === "ninja") {
        return "ninja";
      }
      else {
        return "default";
      }
    },

    spaceCardNumber() {
      let newNum = ""
      this.card.number.split("").forEach( function(num, index) {
        newNum += num
        if( (index+1) % 4==0) {
          newNum += " "
        }
      })
      
      return newNum
    }
  },
};
</script>

<style>
p {
  margin: 0;
}

.bitcoin {
  background-color: rgb(255, 174, 52);
}

.blockchain {
  background-color: rgb(139, 88, 249);
}

.evil {
  background-color: rgb(243, 51, 85);
}

.ninja {
  background-color: rgb(34, 34, 34);
  color: wheat;
}

.default{
  background-color: grey;
}

.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(8, 1fr);
  height: 275px;
  width: 500px;
  border-radius: 25px;
  padding: 0.8rem;
}

.chip {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  margin-left: 20px;
}

.vendor-img {
  grid-column: 2;
  grid-row: 1;
  align-self: center;
  justify-self: end;
  margin-right: 20px;
}

.card-number {
  grid-column: span 2;
  grid-row: 4;
  font-size: 35px;
  justify-self: center;
}

.cardholder-name {
  grid-column: 1;
  grid-row: 6;
  margin-left: 20px;
}

.first-last {
  grid-column: 1;
  grid-row: 7;
  margin-left: 20px;
}

.valid-thru {
  grid-column: 2;
  grid-row: 6;
  justify-self: end;
  margin-right: 20px;
}

.month-year {
  grid-column: 2;
  grid-row: 7;
  justify-self: end;
  margin-right: 20px;
}
</style>
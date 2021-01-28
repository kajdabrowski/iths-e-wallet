<template>
  <div class="cardform">
    <Card v-bind:card="card"></Card>
    <form class="cardformwrap">
      <label class="cardnumberl" name="cardnumber" for="cardnumber"
        >CARD NUMBER</label
      >
      <input
        class="cardnumberi"
        v-model="card.number"
        type="text"
        name="cardnumber"
        placeholder="XXXX XXXX XXXX XXXX"
        maxlength="16"
      />
      <label class="cardholderl" for="cardholder">CARDHOLDER</label>
      <input
        class="cardholderi"
        v-model="card.holder"
        type="text"
        name="cardholder"
        placeholder="NAMN NAMNSSON"
      />
      <label class="monthl" for="month">MONTH</label>
      <select class ="monthi" v-model="card.validMonth" name="monthselect">
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="04">Apr</option>
        <option value="05">May</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Aug</option>
        <option value="09">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
      
      <label class="yearl" for="year">YEAR</label>
      <select class="yeari" v-model="card.validYear" name="yearselect">
      <option value="21">2021</option>
      <option value="22">2022</option>
      <option value="23">2023</option>
      <option value="24">2024</option>
      <option value="25">2025</option>
      </select>
      
      <label class="vendorl" for="vendor">VENDOR</label>
      <select name="vendor" v-model="card.vendor" class="vendori">
        <option value="bitcoin">Bitcoin Inc</option>
        <option value="blockchain">Blockchain Inc</option>
        <option value="evil">Evil Corp</option>
        <option value="ninja">Ninja Bank</option>
      </select>
    </form>
    <router-link class="cta-add-btn" to="/" @click="newCard"
      >ADD NEW CARD</router-link>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  methods: {
    newCard() {
      this.$root.cards.push(this.card);
    },
  },

  components: { Card },

  data() {
    return {
      card: {
        id: "",
        holder: "",
        vendor: "",
        number: "",
        validMonth: "",
        validYear: "",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.cardform {
  height: 275px;
  width: 500px;
  margin-bottom: 120px;

}

.cardformwrap {
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-template-rows: repeat(9, 1fr);
  margin-top: 25px;
  gap: 5px;
}

.cardnumberl {
  grid-column: 1;
  grid-row: 1;
}

.cardnumberi {
  grid-column: span 2;
  grid-row: 2;
}

.cardholderl {
  grid-column: span 2;
  grid-row: 3;
}

.cardholderi {
  grid-column: span 2;
  grid-row: 4;
}

.monthl{
grid-column: 1;
grid-row: 5;
}

.monthi{
  grid-column: 1;
  grid-row: 6;

}

.yearl{
  grid-column: 2; 
  grid-row: 5;
}

.yeari{
  grid-column: 2;
  grid-row: 6;
}

.ccvl {
  grid-column: 2;
  grid-row: 5;
}

.ccvi {
  grid-column: 2;
  grid-row: 6;
}

.vendorl {
  grid-column: 1;
  grid-row: 7;
}

.vendori {
  grid-column: span 2;
  grid-row: 8;
}

.cta-add-btn {
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
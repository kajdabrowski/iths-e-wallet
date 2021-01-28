<template>
  <div class="add-card">
    <Top title="ADD A NEW CARD" subtitle="New Card"></Top>
    <CardForm />
  </div>
</template>

<script>
import CardForm from "../components/CardForm.vue";
import Top from "../components/Top.vue";

export default {
  components: { CardForm, Top },
};
</script>

<style>
.add-card {
  display: grid;
  place-items: center;
}
</style>

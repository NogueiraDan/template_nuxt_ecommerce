<script setup>
// Esse metodo mantem a reatividade das propriedades
import { storeToRefs } from "pinia";
import { useCounterStore } from "../store/countStore";

const storeCount = useCounterStore();
const { count, name, doubleCount } = storeToRefs(storeCount);
// Função não precisa usar em storeToRefs
const { increment, changeName } = storeCount;

</script>

<template>
  <div class="stores">
    <p>Pinia State Name is: {{ name }}</p>
    <p>Pinia Count is: {{ count }}</p>
    <p>Pinia DoubleCount is: {{ doubleCount }}</p>
    <button @click="increment">Increment Count</button>
  </div>
</template>

<style>
.stores {
  padding: 200px 0;
}
</style>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  product: {
    type: Object,
  },
});
const { product } = props;

const limitString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
};
</script>

<template>
  <NuxtLink :to="`/products/${product.id}`" :props="{ product }">
    <div class="product">
      <div class="placeholder-image">
        <img :src="product.image" class="productImage" />
      </div>

      <div>
        <span class="font-bold rainbow-text">{{
          limitString(product.title, 25)
        }}</span>
        <p>
          {{ product.desccription }}
        </p>
        <p class="font-bold rainbow-text">R$ {{ product.price }}</p>
      </div>

      <button class="product-shop">Comprar</button>
    </div>
  </NuxtLink>
</template>

<style>
.product {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  min-height: 100%;
  height: auto;
  text-align: start;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.placeholder-image {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
.productImage {
  object-fit: contain;
  width: 50%;
}

.product-shop {
  margin-top: 10px;
  cursor: pointer;
  width: 75%;
  padding: 8px 5px;
  background: #66007d;
  color: #ffffff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

@media (min-width: 320px) and (max-width: 1025px) {}
</style>

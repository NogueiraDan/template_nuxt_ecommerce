<script setup>
import { ref, computed, defineProps } from "vue";
const props = defineProps({
  category: {
    type: String,
  },
});
const { category } = props;
console.log(category);
const response = await useFetch(`/api/products/category/${category}`);
console.log(response);

const currentIndex = ref(0);
// Recomendeded: 2 or 1.
const commingSlides = 2;
const loop = ref(true);

const sliderStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 25}%)`,
  // Assumindo que tem 4 slides visiveis e cada um tem 25% de largura
}));

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= commingSlides;
    console.log("Previous in IF: " + currentIndex.value);
  } else if (loop.value) {
    // Se o loop estiver ativado, vá para o último slide quando clicar em "Anterior" no primeiro slide.
    currentIndex.value = response.data._rawValue.length - commingSlides;
  }
};

const nextSlide = () => {
  if (currentIndex.value + commingSlides < response.data._rawValue.length) {
    currentIndex.value += commingSlides;
    console.log("Next in IF: " + currentIndex.value);
  } else if (loop.value) {
    // Se o loop estiver ativado, volte para o primeiro slide quando clicar em "Próximo" no último slide.
    currentIndex.value = 0;
  }
};
</script>

<template>
  <div class="product-slider">
    <h2
      class="py-[10px] text-3xl text-center leading-normal font-bold rainbow-text"
    >
      {{ category }}
    </h2>
    <div class="slider-container">
      <div class="slider" :style="sliderStyle">
        <div class="slide" v-for="item in response.data._rawValue" :key="item">
          <ProductCard :product="item" />
        </div>
      </div>
    </div>
    <div class="slider-buttons">
      <button class="prev-button" @click="prevSlide">&#8249;</button>
      <button class="next-button" @click="nextSlide">&#8250;</button>
    </div>
  </div>
</template>

<style scoped>
.product-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: auto;
  width: calc(25% * 4);
  /* TABLET E MOBILE */
  /* width: calc(50% * 2); */
  margin-bottom: 50px;
}

.slider-container {
  overflow: hidden;
  width: 100%;
  height: auto;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  /* Assumindo que cada slide tem 25% de largura */
  flex: 0 0 25%;
  padding: 20px;
  box-sizing: border-box;
}
.slider-buttons {
  width: 100px;
  display: flex;
  justify-content: space-between;
}
.prev-button,
.next-button {
  margin-top: 10px;
  cursor: pointer;
  width: 45px;
  padding: 5px;
  background: #66007d;
  color: #ffffff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
}

.loop-toggle {
  margin-top: 10px;
}

.loop-toggle input[type="checkbox"] {
  margin-right: 5px;
}

@media (min-width: 320px) and (max-width: 1025px) {
  .product-slider {
    width: calc(50% * 2);
  }
}
</style>

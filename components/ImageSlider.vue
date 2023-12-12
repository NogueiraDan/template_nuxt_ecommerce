<template>
  <div class="banner-slider">
    <div class="slider-container">
      <div class="slider" :style="sliderStyle">
        <div class="slide" v-for="slide in slides" :key="slide">
          <div class="banner">
            <img :src="slide.image" alt="Banner" />
          </div>
        </div>
      </div>
    </div>
    <div class="slider-buttons">
      <button class="prev-button" @click="prevSlide">&#8249;</button>
      <button class="next-button" @click="nextSlide">&#8250;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const currentIndex = ref(0);
const loop = ref(true);

const slides = [
  { image: "https://source.unsplash.com/random/1920x700?ecommerce" },
  { image: "https://source.unsplash.com/random/1920x700?ecommerce" },
];

const sliderStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`, // Assume que cada banner ocupa 100% da largura
}));

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else if (loop.value) {
    currentIndex.value = slides.length - 1;
  }
};

const nextSlide = () => {
  if (currentIndex.value < slides.length - 1) {
    currentIndex.value++;
  } else if (loop.value) {
    currentIndex.value = 0;
  }
};
</script>

<style scoped>
/* Adicione os estilos CSS aqui para personalizar a aparência do slider */
.banner-slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 50px;
}

.slider-container {
  overflow: hidden;
  width: 100%; /* Defina a largura total para exibir apenas um banner por vez */
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 100%; /* Cada slide ocupa 100% da largura */
}

.banner {
  box-sizing: border-box;
  text-align: center;
}

.banner img {
  object-fit: contain;
  max-width: 100%; /* Garante que a imagem do banner se ajuste à largura do contêiner */
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
</style>

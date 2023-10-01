<template>
  <div>
    <Header />
    <main>
      <section class="lg:px-[10%] pt-10 px-[5%]">
        <div
          class="flex relative items-start flex-col lg:flex-row gap-7"
          v-if="loading"
        >
          <h1>Carregando...</h1>
        </div>
        <div
          v-else
          class="flex relative items-start flex-col lg:flex-row gap-7"
        >
          <div class="flex-1">
            <img
              class="w-full object-contain h-[400px]"
              :src="product.image"
              :alt="product.title"
            />
          </div>
          <div class="flex-1">
            <p
              class="capitalize text-sm px-4 py-1 bg-gray-200 inline-block rounded text-gray-500"
            >
              {{ product.category }}
            </p>
            <h1 class="font-bold lg:text-3xl text-2xl my-5 lg:my-6">
              {{ product.title }}
            </h1>
            <div class="flex items-center space-x-1">
              <template v-for="(r, i) in 5" :key="`productRating-${i}`">
                <Icon
                  icon="ri:star-fill"
                  :class="{
                    'text-primary-500': i < parseInt(product.rating.rate),
                    'text-gray-300': i >= parseInt(product.rating.rate),
                  }"
                />
              </template>
              <span class="text-xs ml-2"
                >{{ product.rating.count }} reviews</span
              >
            </div>

            <p class="lg:text-3xl text-2xl mt-8">
              {{ formatPrice(product.price) }}
            </p>
            <p
              class="mt-5 text-gray-500 whitespace-pre-wrap text-sm lg:text-base"
              v-html="product.description"
            ></p>
            <div class="mt-12 flex items-center space-x-5">
              <button 
                class="rainbow-bg text-white py-4 rounded-md w-full"
                @click="product && cartStore.addProduct(product)"
              >
                Add To Cart
              </button>
              <button>
                <Icon icon="ph:heart-straight" class="text-gray-500 w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <br />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { useCartStore } from "~/store/cartStore";
const cartStore = useCartStore();
const route = useRoute();
const id = route.params.id;
const loading = ref(true);
const product = ref();

onMounted(() => {
  setTimeout(async () => {
    const { data: item } = await useFetch(`/api/products/${id}/`);
    loading.value = !loading.value;
    product.value = item._rawValue;
    console.log("Product");
    console.log(product);
  }, 10);
});

// function used to format the price
const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

// // Set header
// useHead({
//   title: `${product.value.title} for ${formatPrice(product.value.price)}`,
// });
</script>

<style></style>

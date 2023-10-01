<template>
  <header class="flex items-center justify-between h-20 px-[5%]">
    <NuxtLink to="/" class="font-bold text-2xl lg:text-4xl">
      <span class="text-primary">DevStore</span>
    </NuxtLink>
    <nav class="flex items-center space-x-7 text-gray-600">
      <template v-for="(n, i) in links" :key="`navLink-${i}`">
        <NuxtLink
          :to="n.link"
          class="inline-block nav-link hover:text-primary group"
        >
          <div class="flex items-center space-x-2">
            <Icon :icon="n.icon" class="w-4 h-4" />
            <span class="font-medium"> {{ n.name }}</span>
          </div>
          <div
            class="h-0.5 w-4/5 bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all"
          ></div>
        </NuxtLink>
      </template>

      <NuxtLink
        @click="setOpen"
        class="inline-block nav-link text-primary group cursor-pointer"
      >
        <div class="flex items-center space-x-2">
          <Icon :icon="'raphael:cart'" class="w-4 h-4" />
          <p class="bg-white text-primary font-bold w-6 h-6 text-center">
            {{ totalCart }}
          </p>
        </div>
        <div
          class="h-0.5 w-4/5 bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all"
        ></div>
      </NuxtLink>
      <template v-if="open">
        <Cart />
      </template>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { provide, ref } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "~/store/cartStore";

const cartStore = useCartStore();
const { totalCart } = storeToRefs(cartStore);
const open = ref(false);
function setOpen() {
  open.value = open.value === true ? false : true;
}
provide("open", {
  open,
  setOpen,
});

const links = [
  {
    name: "Blog",
    icon: "carbon:blog",
    link: "/",
  },
  {
    name: "Login",
    icon: "ic:outline-login",
    link: "/",
  },
];
</script>

<style scoped>
.nav-link.router-link-active.router-link-exact-active {
  @apply text-primary;
}
</style>

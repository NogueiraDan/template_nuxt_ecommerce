<template>
  <main class="min-h-screen">
    <Header />
    <ImageSlider />
    <section class="lg:px-[5%] px-[5%] pb-4">
      <h1
        class="lg:text-5xl py-[10px] text-4xl text-center leading-normal font-bold rainbow-text mb-5"
      >
        Confira as últimas novidades!
      </h1>

      <ProductSlider :category="categories[0]" />
      <ProductSlider :category="categories[1]" />
    </section>
    <section class="flex justify-center mb-9">
      <NuxtLink to="/products" class="font-bold text-3xl">
        <span class="text-primary">Confira mais produtos aqui</span>
      </NuxtLink>
    </section>
  </main>
  <Footer />
</template>

<script setup>
const response = await useFetch("/api/products/categories");
const categories = response.data._rawValue;
</script>

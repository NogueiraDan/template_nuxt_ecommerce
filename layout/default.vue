<template>
  <div class="default">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style>
.default {
  background: #fcfcfc;
  color: #66007d;
  min-height: 100vh;
}
</style>

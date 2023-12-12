<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "~/store/cartStore";
import { limitString } from "#imports";
const cartStore = useCartStore();
const { totalCart, calculateSubtotal } = storeToRefs(cartStore);

onMounted(() => {
  cartStore.loadCartFromLocalStorage();
});
</script>

<template>
  <div class="mainCheckout">
    <NuxtLink to="/">
      <span
        class="capitalize text-sm px-4 py-1 bg-gray-200 inline-block rounded text-gray-500"
        >Voltar</span
      >
    </NuxtLink>
    <h1 class="checkoutTitle">
      Você tem {{ totalCart }} produtos no carrinho!
    </h1>

    <template v-if="totalCart">
      <div class="checkoutWrapper">
        <div class="checkoutLeft">
          <template v-for="item in cartStore.cart">
            <div class="checkoutProductWrapper">
              <img :src="item.image" class="checkoutProductImage" />
              <span>{{ limitString(item.title, 30) }}</span>
              <div class="checkoutProductQuantity">
                <span
                  class="quantitySelector"
                  @click="cartStore.decrementQuantity(item.id)"
                >
                  -
                </span>
                <p>{{ item.quantity }}</p>
                <span
                  class="quantitySelector"
                  @click="cartStore.incrementQuantity(item.id)"
                >
                  +
                </span>
              </div>
              <div>
                <p class="checkoutProductPrice">R${{ item.price }} / unidade</p>
              </div>
            </div>
          </template>
        </div>

        <div class="checkoutRight">
          <h2 class="checkoutRightTitle">Resumo do Pedido</h2>
          <div class="checkoutSummaryPriceWrapper">
            <p class="checkoutSummaryPrice">SUBTOTAL DE PRODUTOS</p>
            <p class="checkoutSummaryPrice">R$ {{ calculateSubtotal }}</p>
          </div>
          <div class="checkoutSummaryPriceWrapper">
            <p class="checkoutSummaryPrice">ENTREGA</p>
            <p class="checkoutSummaryPrice">R$ 20,00</p>
          </div>

          <div class="checkoutSummaryTotalWrapper">
            <p class="checkoutSummaryTotal">TOTAL</p>
            <p class="checkoutSummaryTotal">
              R$ {{ (calculateSubtotal + 20).toFixed(2) }}
            </p>
          </div>

          <button class="finishOrder">FINALIZAR A COMPRA</button>
          <br />
          <NuxtLink to="/" class="backProducts">CONTINUAR COMPRANDO</NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>

<style>
.mainCheckout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}

.checkoutTitle {
  font-size: 30px;
  font-weight: 600;
}

.checkoutWrapper {
  width: 100%;
  height: "auto";
  display: flex;
  margin: 30px 0;
}

.checkoutLeft {
  width: 65%;
  height: 65vh;
  /* background: #f3e4d6; */
  overflow-y: scroll;
}

.checkoutRight {
  width: 33%;
  height: auto;
  background: #eee;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
}
.checkoutProductWrapper {
  width: 95%;
  height: 150px;
  border: 2px solid #eee;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
}

.checkoutRightTitle {
  margin-bottom: 20px;
}

.checkoutProductImage {
  height: 100px;
  width: 100px;
}

.checkoutProductQuantity {
  width: 55px;
  padding: 0 5px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--textos-dark-textos, #a8a8b3);
  background: #f3f5f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.quantitySelector {
  font-size: 20px;
  cursor: pointer;
}

.checkoutSummaryPriceWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
}

.checkoutSummaryPrice {
  color: #66007d;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 150%; /* 24px */
}

.checkoutSummaryTotalWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  border-top: 1px solid #dce2e5;
  padding: 15px 0;
}

.checkoutSummaryTotal {
  color: #66007d;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
}

.finishOrder {
  display: flex;
  width: 305px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  color: var(--shapes-light-background, #f5f5fa);
  background: #51b853;
  border: 0;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
}

.backProducts {
  display: flex;
  width: 305px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-shrink: 0;
  color: var(--shapes-light-background, #f5f5fa);
  background: #52b27a;
  border: 0;
  border-radius: 3px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  line-height: 150%; /* 24px */
  text-transform: uppercase;
}

@media (min-width: 320px) and (max-width: 1024px) {
  .checkoutWrapper {
    flex-direction: column;
    width: 85%;
  }
  .checkoutLeft,
  .checkoutRight {
    width: 100%;
  }
}
</style>

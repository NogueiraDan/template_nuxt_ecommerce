<script setup>
import { Icon } from "@iconify/vue";
import { inject } from "vue";
const { open, setOpen } = inject("open");
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
  <div class="cart">
    <div class="cartHeader">
      <p>Minha sacola</p>
      <button @click="setOpen">
        <Icon :icon="'ion:close-outline'" class="w-8 h-8" />
      </button>
    </div>

    <template v-if="totalCart">
      <div class="cartBody">
        <template v-for="item in cartStore.cart">
          <div class="productWrapper">
            <div class="productCartImageWrapper">
              <img :src="item.image" class="productCartImage" />
            </div>

            <div class="productName">
              <p>{{ limitString(item.title, 20) }}</p>
              <p>Quantidade: {{ item.quantity }}</p>
              <p>R${{ item.price }}/unidade</p>
            </div>

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

            <button
              class="productRemove"
              @click="cartStore.removeProduct(item.id)"
            >
              <Icon :icon="'pajamas:remove'" class="w-4 h-4" />
            </button>
          </div>
        </template>

        <div class="cartFooter">
          <div>
            <span>
              <strong>TOTAL: </strong>
            </span>
          </div>
          <div>
            <span>R${{ calculateSubtotal }}</span>
          </div>
        </div>

        <hr />
        <NuxtLink to="/checkout" class="btnCheckout">FINALIZAR COMPRA</NuxtLink>
      </div>
    </template>

    <template v-else>
      <div><h2>Seu carrinho está vazio</h2></div>
    </template>
  </div>
</template>

<style scoped>
.cart {
  position: fixed;
  top: 0%;
  right: 0%;
  z-index: 99;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 7px -5px rgba(0, 0, 0, 0.5);
  width: 35%;
  height: 100vh;
  overflow-y: scroll;
  color: #000;
}

.cartHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 60px;
  padding: 8px;
  margin-bottom: 12px;
}
.cartFooter {
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.iconClose {
  cursor: pointer;
}

.productWrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0 30px 0;
  padding: 20px 5px;
  border-bottom: 1px solid #f2f2f2;
  width: 100%;
}
.productCartImageWrapper {
  width: 20%;
}
.productCartImage {
  object-fit: cover;
  width: 60%;
  height: auto;
  margin: 0 auto;
}
.productName {
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-weight: 400;
  width: 50%;
  padding: 0 10px;
  gap: 4px;
}
.productRemove {
  cursor: pointer;
  margin: 0 12px;
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

.btnCheckout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 46px;
  border-radius: 5px;
  border: 0;
  background-color: #8d28bd;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  margin: 10px auto;
}

.btnClearCart {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 0;
  border: 1px solid #08151d;
  background: #c50707;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
}

/* MEDIAS QUERIES */
@media (min-width: 200px) and (max-width: 350px) {
  .productWrapper {
    flex-direction: column;
    align-items: flex-start;
  }
  .cart {
    width: 80%;
  }
}
@media (min-width: 351px) and (max-width: 1200px) {
  .cart {
    width: 80%;
  }

  .productRemove {
    right: 0%;
  }
}
@media (min-width: 1200px) and (max-width: 2560px) {
}
</style>

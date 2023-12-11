<script setup>
import { ref } from "vue";
const email = ref("");

const subscribe = () => {
  alert(email.value);
};
</script>

<template>
  <div class="footer">
    <div class="footer-row1">
      <div class="institucionais">
        <div class="footer-menu">
          <p class="footer-link">Quem somos</p>
          <p class="footer-link">FAQ</p>
          <p class="footer-link">Fale Conosco</p>
        </div>
        <div>
          <p class="footer-link">Termos de Uso</p>
          <p class="footer-link">Politicas de Trocas</p>
          <p class="footer-link">Politicas de Privacidade</p>
        </div>
        <div>
          <p class="footer-link">Termos de Uso</p>
          <p class="footer-link">Politicas de Trocas</p>
          <p class="footer-link">Politicas de Privacidade</p>
        </div>
      </div>
      <div class="newsletter">
        <span>Assine nossa Newsletter e receba promoções</span>
        <div class="newsletterContainer">
          <input
            type="email"
            v-model="email"
            placeholder="Digite seu email"
            class="inputNewsletter"
          />
          <button class="btnNewsletter" @click="subscribe">Enviar</button>
        </div>
      </div>
    </div>
    <div class="footer-row2">
      <span class="storeInfo"
        >Minha Loja Produtos e Serviços Ltda - CNPJ sob n.o xx.xxx.xxx/xxxx-xx -
        Av. Teste seu endereço 40 - Cidade do Sol - Cidade/sol.</span
      >
    </div>
  </div>
</template>

<style scoped>
.footer {
  height: auto;
  padding: 20px 32px;
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.footer-row1 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  gap: 16px;
}
.footer-row2 {
  display: flex;
  justify-content: center;
}

.storeInfo {
  font-size: 14px;
  opacity: 0.9;
  text-align: center;
}
.institucionais {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.newsletter {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
  border-radius: 10px;
  gap: 12px;
}
.newsletterContainer {
  width: 75%;
  display: flex;
}

.inputNewsletter {
  height: 45px;
  width: 100%;
  border: 0;
  /* border: 1px solid #7b0296; */
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding-left: 12px;
}

.btnNewsletter {
  width: 100px;
  height: 45px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #7b0296;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  border: 0;
  cursor: pointer;
}

.footer-link {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

@media (min-width: 320px) and (max-width: 1025px) {
  .footer-row1 {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 24px;
    gap: 8px;
  }
  .institucionais {
    width: 100%;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }
  .newsletter {
    width: inherit;
    justify-content: center;
  }
}
</style>

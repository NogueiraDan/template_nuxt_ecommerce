<script setup>
import {ref} from "vue"
const email = ref("");

const subscribe = ()=>{
  alert(email.value)
}
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
        <input
          type="email"
          v-model="email"
          placeholder="Digite seu email"
          class="inputNewsletter"
        />
        <button class="btnNewsletter" @click="subscribe">Enviar</button>
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
  height: 300px;
  padding: 20px;
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.footer-row1 {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
}
.footer-row2 {
  display: flex;
  justify-content: center;
}

.storeInfo{
    font-size: 14px;
    opacity: 0.9;
}
.institucionais {
  display: flex;
  justify-content: space-between;
  width: 50%;
}
.newsletter {
  width: 50%;
  display: inherit;
  justify-content: flex-end;
  align-items: center;
}

.inputNewsletter {
  height: 45px;
  width: 50%;
  border: 0;
  /* border: 1px solid #7b0296; */
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
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

.footer-menu {
}

.footer-link {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
</style>
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: (): State => {
    return {
      cart: [],
    };
  },
  actions: {
    addProduct(item: CartItem) {
      const existingItem = this.cart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // Se o produto já existe no carrinho, aumente a quantidade
        existingItem.quantity += 1;
      } else {
        // Se o produto não existe no carrinho, adicione-o
        this.cart.push({ ...item, quantity: 1 });
      }
      alert("Adicionado!");
      // Atualize o carrinho no localStorage após a modificação
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    removeProduct(itemId: number) {
      this.cart = this.cart.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    loadCartFromLocalStorage() {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
    },

    incrementQuantity(itemId: number) {
      const existingItem = this.cart.find((cartItem) => cartItem.id === itemId);
      existingItem.quantity += 1;
    },

    decrementQuantity(itemId: number) {
      const existingItem = this.cart.find((cartItem) => cartItem.id === itemId);
      if (existingItem?.quantity == 0) {
        this.removeProduct(itemId);
        return;
      }

      existingItem.quantity -= 1;
    },
  },
  getters: {
    totalCart: (state) => {
      return state.cart.length;
    },
    calculateSubtotal: (state) => {
      // return state.cart.reduce((subtotal: any, item: any) => {
      //   return subtotal + item.price * item.quantity;
      // }, 0);
      let subtotal = 0;
      for (const item of state.cart) {
        subtotal += item.price * item.quantity;
      }
      return subtotal;
    },
  },
});

interface State {
  cart: CartItem[];
}

interface CartItem {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number | any;
}

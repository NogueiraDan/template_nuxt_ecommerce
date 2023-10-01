import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 1, name: "John" }),
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
    
  },
  actions: {
    increment() {
      this.count++;
    }
  },
});

// export const useCounterStore = defineStore("counter", ()=>{
//     const count = ref(1);
//     const products = [
//         {
//             "id":1,
//             "title":"Product"
//         },
//         {
//             "id":1,
//             "title":"Product"
//         },
//         {
//             "id":1,
//             "title":"Product"
//         },
//     ]
//     function increment (){
//         count.value++
//     }

//     return {count, products,increment}
// })
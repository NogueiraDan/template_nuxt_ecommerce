export default defineEventHandler(async (event) => {
    const category =  event.context.params?.category;
    const response = await $fetch(`https://fakestoreapi.com/products/category/${category}`);
    return  response;
  })
  
<template>
  <div>
    <NavigationPage />
    <ShoppingBag />
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h1>{{ product.title }}</h1>
        <h4>{{ product.color }}</h4>
        <h3>{{ product.price }}</h3>
        <button>+</button>
        <p>Quantity</p>
        <button>-</button>
      </li>
    </ul>
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage.vue";
import ShoppingBag from "@/components/ShoppingBag.vue";
import axios from "axios";
export default {
  name: "ProductsPage",
  components: {
    NavigationPage,
    ShoppingBag,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/products`);
      this.products = res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style lang="scss" scoped></style>

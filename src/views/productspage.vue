<template>
  <div class="container">
    <NavigationPage />
    <ShoppingBag />
    <div class="product-div">
      <ul>
        <li v-for="product in products" :key="product.id">
          <h1>{{ product.title }}</h1>
          <h4>{{product.color}}</h4>
          <h3>{{product.price}} $</h3>
          <div class="color-preview"></div>
				<OrderCounter/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage.vue";
import ShoppingBag from "@/components/ShoppingBag.vue";
import OrderCounter from "@/components/OrderCounter"
import axios from "axios";
export default {
  name: "productspage",
  components: {
    NavigationPage,
	ShoppingBag,
	OrderCounter
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

<style scoped>
.container {
  background: #50a280;
}

.product-div {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
}

ul {
  width: 80%;
  list-style: none;
}
li {
  background: whitesmoke;
  box-shadow: 5px 5px 6px;
  margin: 10px;
  border-radius: 7.25px;
  padding: 15px;
}

.order-counter {
  display: flex;
  flex-direction: row-reverse;
}


h3 {
  font-weight: 300;
}


.color-preview {
  height: 30px;
  width: 30px;
  border-radius: 99rem;
  border: solid 1px black;
}
</style>

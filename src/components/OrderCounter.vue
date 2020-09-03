<template>
  <div class="order-counter">
    <button @click="orderCount++">+</button>
    <p>{{orderCount}}</p>
    <button  @click="orderCount--">-</button>
  </div>
</template>

<script>
export default {
  name: "OrderCounter",
  data() {
    return {
      orderCount: 0,
    };
  },
};
</script>

<style>
button {
  height: 30px;
  width: 30px;
  font-size: 20px;
  font-weight: bold;
  /* border-radius: 15px; */
  border: none;
  background: linear-gradient(to bottom, #000, #555);
  color: #fff;
  outline: none;
}

p {
  padding: 10px;
  font-weight: bold;
}

button:hover {
  background: linear-gradient(to bottom, #222, #777);
}
</style>

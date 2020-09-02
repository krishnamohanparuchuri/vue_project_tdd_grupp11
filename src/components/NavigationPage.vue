<template>
  <div class="nav-container">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/products">Products</router-link>
      </li>
    </ul>
    <!-- <h1>hello world</h1> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-container {
  font-family: sans-serif;
  width: 100vw;
  /* background: maroon;	 */
  height: 10vh;
  padding: 10px 10px;
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}

li {
  margin: 0 20px;
}
a {
  color: white;
  font-size: 20px;
  text-decoration: none;
  font-weight: lighter;
}

li :hover {
  color: #222;
}
</style>


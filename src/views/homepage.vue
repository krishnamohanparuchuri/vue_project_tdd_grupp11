<template>
  <div class="container">
    <div class="container-header">
      <NavigationPage />
      <ShoppingBag />
    </div>
    <h1>homepage</h1>
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage.vue";
import ShoppingBag from "@/components/ShoppingBag.vue";

export default {
  name: "HomePage",
  components: {
    NavigationPage,
    ShoppingBag,
  },
};
</script>

<style scoped>
.container {
  background: #50a280;

}

.container-header {
  display: flex;
  /* background: linear-gradient(to bottom, #00ff95, #00ce78);	

   */
  background: #50a280;

}
</style>

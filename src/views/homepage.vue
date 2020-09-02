<template>
  <div class="container">
    <NavigationPage />
    <ShoppingBag />
      <h1>homepage</h1>
  </div>
</template>

<script>
import NavigationPage from '@/components/NavigationPage.vue';
import ShoppingBag from '@/components/ShoppingBag.vue';
 
export default {
  components: {
    NavigationPage, ShoppingBag
  }

}
</script>

<style>

</style>
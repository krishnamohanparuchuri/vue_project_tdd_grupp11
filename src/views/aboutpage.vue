<template>
  <div class="container">
    <NavigationPage />
    <ShoppingBag />
    <div class="wrapper">
      <img class="" src="" alt="logo" />
      <h1 class="title">{{ title }}</h1>
      <p class="description">{{ description }}</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavigationPage from "@/components/NavigationPage.vue";
import ShoppingBag from "@/components/ShoppingBag.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AboutPage",
  components: {
  NavigationPage,
  ShoppingBag,
  Footer
  },
  data() {
    return {
      title: "About us",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
  }
};
</script>

<style scoped>
.container {
  background: #50a280;
  width: auto;
}
.wrapper {
  padding: 20px 32px;
}
h1 {
  color: white;
  font-family: "PT Serif", serif;
  font-weight: 600;
}
.description {
  font-weight: bold;
  margin: 20px 0;
}
</style>

<template>
  <div>
    <Header />
    <div class="flex">
      <Nav />
      <HomeView />
    </div>
  </div>
</template>

<script>
import Header from "./components/header/TopHeader.vue";
import Nav from "./components/navbar/NavBar.vue";
import HomeView from "./views/HomeView.vue";

export default {
  components: { Header, HomeView, Nav },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.flex {
  display: flex;
}
</style>

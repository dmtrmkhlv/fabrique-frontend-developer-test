<template>
  <div class="wrapper">
    <div class="container">
      <Menu />
      <div class="main">
        <Header />
        <div class="main__content">Home</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    Header,
    Menu,
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap");

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Source Sans Pro", sans-serif;
  color: #3f3f3f;
  background: #e5e5e5;
}

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
  background-color: #faf9f7;
}

.container {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}

.main {
  display: block;
  flex: 1;
  padding: 0 5%;
}
</style>
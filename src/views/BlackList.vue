<template>
  <div class="wrapper">
    <Header />
    <div class="main">
      <Menu />
      <div>BlackList</div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "BlackList",
  components: {
    Header,
    Menu,
  },
};
</script>

<style lang="scss">
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
  padding: 0 32px;
  background-color: #faf9f7;
}

.main {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 720px) {
  .main {
    flex-wrap: wrap;
  }
}
</style>
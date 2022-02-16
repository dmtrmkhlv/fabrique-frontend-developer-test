<template>
  <Home />
</template>

<script>
// @ is an alias to /src
import Home from "@/views/Home";

export default {
  name: "App",
  components: {
    Home,
  },
  mounted() {
    this.$store.dispatch("fetchQuizSelectList");
  },
};
</script>

<template>
  <header class="header">
    <div class="header__search">
      <input type="text" placeholder="Поиск по системе" />
    </div>
    <div class="header__user">
      <div class="user">
        <img class="user_logo" src="#" alt="user logo" />
        <p class="user_name">Alexander C.</p>
        <p class="user_position">Администратор</p>
      </div>
    </div>
    <div class="header__breadcrumbs">Logo -> Опросы -> Добавить опрос</div>
  </header>
</template>

<script>
export default {
  name: "Header",
  // data() {
  //   return {
  //     sortGoodsBy: "default"
  //   }
  // },
  // methods: {
  //   sortGoodList() {
  //     this.$store.dispatch("sortGoodsList", this.sortGoodsBy)
  //   }
  // }
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #7bae73;
  height: 90px;
  flex-wrap: wrap;
  &__search {
    width: 60%;
    input {
      width: 100%;
    }
  }
}

h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
}

select {
  background: #fffefb;
  box-shadow: 0px 2px 5px 0px #0000001a;
  border: none;
  border-radius: 4px;
  padding: 10px 28px 11px 16px;
  height: 36px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    border: 1px solid #7bae73;
  }
}

@media screen and (max-width: 720px) {
  .header {
    flex-wrap: wrap;
    margin: 3% 2% 0 2%;
    padding-top: 0;
  }
}
</style>
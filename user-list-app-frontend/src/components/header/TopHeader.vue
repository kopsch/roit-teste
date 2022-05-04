<template>
  <div class="header">
    <div class="container-logo">
      <div class="menu-logo">
        <img src="../../assets/menu.svg" alt="menu" />
      </div>
      <img
        src="../../assets/logo-roit.svg"
        alt="logo"
        style="cursor: pointer"
      />
    </div>
    <div class="tools-container">
      <input class="input-search-header" placeholder="Busca" type="text" />
      <div class="select-example">
        <img src="../../assets/brazil.svg" alt="brazil" />
        <img src="../../assets/drop.svg" alt="drop" style="cursor: pointer" />
      </div>
      <Dropdown />
    </div>
  </div>
</template>

<script>
import Dropdown from "../dropdown/DropDown.vue";
export default {
  components: {
    Dropdown,
  },
};
</script>

<style scoped>
.header {
  padding: 20px;
  background: linear-gradient(
    90deg,
    rgba(21, 46, 62, 1) 0%,
    rgba(17, 63, 93, 1) 51%,
    rgba(12, 81, 126, 1) 100%
  );
  display: flex;
  justify-content: space-between;
}
.container-logo {
  display: flex;
  width: 20%;
  justify-content: space-between;
}

.tools-container {
  display: flex;
  width: 30%;
  justify-content: space-between;
}

.menu-logo {
  background-color: #ffffff33;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
}

.input-search-header {
  background: url("../../assets/magnifier-tool.svg") no-repeat scroll 15px 10px;
  background-color: #0000004d;
  border: none;
  border-radius: 6px;
  outline: none;
  font-size: 14px;
  padding: 8px 0 8px 45px;
  width: 236px;
}

.select-example {
  background-color: #0000004d;
  display: flex;
  align-items: center;
  padding: 0 5px;
  border-radius: 5px;
  justify-content: space-around;
  width: 71px;
}
</style>

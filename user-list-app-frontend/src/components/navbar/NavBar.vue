<template>
  <div class="nav">
    <div class="icons">
      <div class="container-icon">
        <img src="../../assets/bars-graphic.svg" alt="graphic" />
      </div>

      <div class="container-icon">
        <img src="../../assets/flow-magic.svg" alt="flow-magic" />
      </div>

      <div class="container-icon">
        <img src="../../assets/contract.svg" alt="contract" />
      </div>

      <div class="container-icon">
        <img src="../../assets/file-edit.svg" alt="file-edit" />
      </div>
    </div>

    <div class="logo"></div>
  </div>
</template>

<style scoped>
.nav {
  width: 70px;
  height: calc(100vh - 80px);
  border: 1px solid #dfe3e6;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}

.icons {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: url("../../assets/logo-nav.svg");
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.25s;
}

.logo:hover {
  transition: 0.25s;
  background: url("../../assets/logo-nav-hover.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.icon-logo {
  cursor: pointer;
}

.container-icon {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 1px;
}

.icons > img {
  width: 20px;
  cursor: pointer;
}

.icons > .container-icon:first-child {
  border-left: 3px solid #e2b874;
}
</style>

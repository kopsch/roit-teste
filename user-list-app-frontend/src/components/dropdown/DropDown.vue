<template>
  <div class="dropdown" @click="scroll">
    <span class="logo-profile">DT</span>
    <transition name="fade" appear>
      <div class="dropdown-profile" v-if="isOpen">
        <span class="dropdown-profile-pic">DT</span>
        <div class="info">
          <span class="profile-name">Daniela Testore</span>
          <span class="profile-company">ROIT</span>
          <span class="profile-email">email@roit.com.br</span>
        </div>
        <button class="manage-button" type="button">Gerencial Perfil</button>
        <div class="line"></div>
        <button class="exit-button" type="button">Sair</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdownComponent",
  data() {
    return { isOpen: false };
  },
  methods: {
    scroll() {
      if (!this.isOpen) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.logo-profile {
  background: #f9fafb;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #e2b874;
  cursor: pointer;
}

.dropdown-profile-pic {
  background: #f9fafb;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border: 5px solid #e4eaef;
  cursor: pointer;
  margin: 15px 0;
  font-size: 26px;
}

.dropdown-profile {
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #dfe3e6;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  top: 12.3%;
  right: 1%;
  /* transform: translateX(50%); */
  width: 295px;
  height: 306px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.info {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.dropdown-profile:before {
  content: "";
  position: absolute;
  right: 15px;
  top: -10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #ffffff transparent;
  z-index: 9999;
}

.profile-name {
  font-weight: bold;
  color: #152e3e;
  font-size: 16px;
  margin-bottom: 5px;
}

.profile-company {
  color: #00000054;
  font-size: 14px;
  margin-bottom: 5px;
}

.profile-email {
  color: #00000054;
  font-size: 14px;
  margin-bottom: 5px;
}

.manage-button {
  border: none;
  border: 1px solid #dfe3e6;
  width: 197px;
  height: 30px;
  color: #152e3e;
  font-weight: bold;
  background-color: #fff;
  margin: 20px 0;
  border-radius: 6px;
  cursor: pointer;
}

.exit-button {
  border: none;
  border: 1px solid #dfe3e6;
  width: 99px;
  height: 30px;
  color: #e2b874;
  font-weight: bold;
  background-color: #fff;
  margin: 20px 0;
  border-radius: 6px;
  cursor: pointer;
}

.line {
  width: 90%;
  height: 2px;
  background-color: #dfe3e6;
}
</style>

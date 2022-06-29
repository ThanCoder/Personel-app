<template>
  <div class="navbar">
    <router-link class="logo" to="/">{{uStore.isLogin ? uStore.user.user_name : 'Personal App'}}</router-link>
    <div class="right">
      <router-link
        v-if="uStore.isLogin === false"
        to="/user/login"
        class="login btn"
        >Login</router-link
      >
      <router-link
        v-if="false"
        to="/user/register"
        class="signup btn"
        >Register</router-link
      >
      <button v-if="uStore.isLogin" @click="logout" class="logout btn bg-red">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { userStore } from "../../stores";
import util from "../../util";

const uStore = userStore();

function userAuthen() {
  util.user.userSuccess((err, res) => {
    if (err) {
      uStore.setLogin(false);
    } else {
      uStore.setUser(res.user.data)
      uStore.setLogin(true);
      uStore.setToken(res.token)
    }
  });
}

function logout() {
  window.localStorage.removeItem("user-token");
  uStore.setLogin(false);
  uStore.setUser(null)
  uStore.setToken(null)
}

onMounted(() => {
  userAuthen();
});
</script>

<style scoped>
.navbar {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  padding: 10px 5px;
  background: rgb(74, 74, 168);
  color: #fff;
  display: flex;
  align-items: center;
}
.navbar .left {
  margin-right: auto;
  justify-self: flex-start;
}
.navbar .right {
  margin-left: auto;
  justify-self: flex-end;
  display: flex;
}
.navbar .right > .btn {
  margin-right: 10px;
}

.logo {
  font-size: 1.4rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}
.logo:hover {
  color: red;
}
</style>
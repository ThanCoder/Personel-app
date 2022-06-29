<template>
  <div class="login">
      <div class="header">Login</div>
      <div 
      v-if="message !== ''"
      :class="isSuccess ? 'message':'message red'">{{message}}</div>
      <form 
      @submit.prevent="login"
      class="c-form">
        <div class="form-group">
          <label for="username">User Name 
            <span 
            v-if="usernameMessage != ''"
            class="msg red">{{usernameMessage}}</span>
            </label>
          <input type="text" class="form-text" @input="usernameChange" v-model="username" placeholder="User Name" id="username">
        </div>
        <div class="form-group">
          <label for="password">Password
            <span 
            v-if="passwordMessage != ''"
            class="msg red">{{passwordMessage}}</span>
          </label>
          <input type="password" @input="passwordChange" v-model="password" class="form-text" placeholder="Password" id="password">
        </div>
        <div class="btn-group">
          <div class="right">
            <input type="submit" value="Login" class="btn">
          </div>
        </div>
      </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, } from 'vue-router'
import axios from 'axios'
import { userStore } from '../../stores'
import util from '../../util'

const uStore = userStore()

const username = ref('')
const password = ref('')  
const usernameMessage = ref('')
const passwordMessage = ref('')
const message = ref('')
const isSuccess = ref(false)

const router = useRouter()


function usernameChange(){
  if(username.value != ''){
    usernameMessage.value = ''
  }
}

function passwordChange(){
  if(password.value != ''){
    passwordMessage.value = ''
  }
}
function login(){
  if(username.value == ''){
    usernameMessage.value = 'Set Username'
    return false;
  }
  if(password.value == ''){
    passwordMessage.value = 'Set Password'
    return false;
  }
  axios
    .post('/api/v2/user/login',{
      username:username.value,
      password:password.value
    })
    .then(res =>{
      isSuccess.value = true;
      if(res.data.success){
          window.localStorage.setItem('user-token',res.data.token)
          router.push('/')
          util.user.userSuccess((err,data)=>{
            if(!err){
              uStore.setLogin(true)
              uStore.setToken(res.data.token)
              uStore.setUser(data.user.data)
            }
          })

      }
    })
    .catch(error =>{
      if(error.response.data.error){
        message.value = error.response.data.error;
        isSuccess.value = false;
      }
      console.log(error.response);
    })
}

</script>

<style>

</style>
<template>
  <div class="add-app-dialog fixed">
    <div class="content-center">
      <div class="header">Add Novel App</div>
      <div v-if="message !== ''" class="message red">{{message}}</div>
      <form class="t-form">
        <div class="form-group">
          <label>Title 
              <div v-if="titleMessage !== ''" class="msg">{{titleMessage}}</div>
              </label>
          <input type="text" placeholder="Title" v-model="title"  />
        </div>
        <div class="form-group">
          <label>Version Code
              <div v-if="versionMessage !== ''" class="msg">{{versionMessage}}</div>
          </label>
          <input type="number" placeholder="Version Code" v-model="version" />
        </div>
        <div class="form-group">
          <label>File Url
              <div v-if="fileUrlMessage !== ''" class="msg">{{fileUrlMessage}}</div>
          </label>
          <input type="text" placeholder="File Url" v-model="fileUrl" />
        </div>
        <div class="form-group">
          <label>Cover Url</label>
          <input type="text" placeholder="Cover Url" v-model="coverUrl" />
        </div>
        <div class="form-group">
          <label>Note</label>
          <textarea placeholder="Note" v-model="note" />
        </div>
      </form>
      <div class="btn-group">
        <button class="btn bg-red" @click="$emit('close')" >Cancel</button>
        <button class="btn" @click="addNovelApp">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { userStore } from '../../../stores'

const emit = defineEmits();

const title = ref('') 
const version = ref(0) 
const fileUrl = ref('') 
const coverUrl = ref('https://i.postimg.cc/jScrHrjN/novel-icon.jpg') 
const note = ref('')

const titleMessage = ref('') 
const versionMessage = ref('') 
const fileUrlMessage = ref('') 

const message = ref('')

const store = userStore()

function addNovelApp(){
    if(title.value === ''){
        titleMessage.value = 'title is required';
        return;
    }
    if(version.value === 0){
        versionMessage.value = 'version code is required'
        return false;
    }
    if(fileUrl.value === ''){
        fileUrlMessage.value = 'file url is required'
        return;
    }
    //pass
    let newApp = {
        title:title.value,
        version_code:version.value,
        file_url:fileUrl.value,
        cover_url:coverUrl.value,
        note:note.value
    }

    axios
    .post('/api/v2/novel-app',newApp,{
        headers:{
            'Content-Type':'application/json',
            token:store.token
        }
    })
    .then(res =>{
        console.log(res.data);
        emit('close','')
    })
    .catch(err =>{
        console.log(err.response);
        if(err.response.data.error){
            message.value = err.response.data.error
        }
    })
    
}


</script>

<style scoped>


@media (max-width: 600px){
  .content-center {
    width: 99%;
  }
}
</style>
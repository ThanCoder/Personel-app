<template>
  <div class="update-app fixed">
      <div class="content-center">
          <div class="header">{{props.app.title ? props.app.title: 'Update App'}}</div>
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
        <button class="btn" @click="updateApp">Update</button>
      </div>
      </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import axios from "axios";
import { userStore } from '../../../stores'

const emit = defineEmits();
const props = defineProps({app:Object})
const store = userStore()

const title = ref('') 
const version = ref(0) 
const fileUrl = ref('') 
const coverUrl = ref('https://i.postimg.cc/jScrHrjN/novel-icon.jpg') 
const note = ref('')

const titleMessage = ref('') 
const versionMessage = ref('') 
const fileUrlMessage = ref('') 

const message = ref('')

//init
onMounted(()=>{
    if(props.app){
        title.value = props.app.title;
        version.value = props.app.version_code;
        fileUrl.value = props.app.file_url;
        note.value = props.app.note;
    }
})

function updateApp(){
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
    let updateApp = {
        title:title.value,
        version_code:version.value,
        file_url:fileUrl.value,
        cover_url:coverUrl.value,
        note:note.value
    }

    axios
    .put(`/api/v2/novel-app/${props.app.id}`,updateApp,{
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

<style>

</style>
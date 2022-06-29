<template>
  <div class="app-context-menu fixed" @click="closeMenu" >
      <div class="content">
          <div class="header">{{props.app.title}}</div>
          <div class="list">
              <div class="list-item" @click="$emit('updateApp')">Update</div>
              <div class="list-item red" @click="deleteApp">Delete</div>
          </div>
      </div>
  </div>
</template>

<script setup>

const emit = defineEmits()
const props = defineProps({app:Object})

function closeMenu(e){
    if(e.target.className === 'app-context-menu fixed'){
        emit('close','')
    }
}

function deleteApp(){
    emit('close','')
    emit('deleteApp',props.app.id);
}

</script>

<style scoped>

.app-context-menu {
    
}

.content {
    width: 100%;
    background: #fff;
    left: 0;
    bottom: 0;
    position: absolute;
    cursor: pointer;
}
.header {
    border-bottom: 1px solid #333;
    padding: 10px 0;
}

.list-item {
    padding: 10px 0;
    font-size: 1.2rem;
    border-bottom: 1px solid #333;
}

</style>
<template>
  <div class="app-list">
    <AppDetail
      v-for="app in props.apps"
      :key="app.id"
      :app="app"
      @contextmenu="openContextMenu(app,$event)"
    />
  </div>
</template>

<script setup>
import AppDetail from './AppDetail.vue'
import { userStore } from '../../../stores'

const props = defineProps({apps:Array})
const emit = defineEmits()
const store = userStore()

function openContextMenu(app,e){
  if(store.isLogin){
    e.preventDefault()
    emit('openContextMenu',app)
  }
}

</script>

<style scoped>

.app-list {
  flex: 8;
  height: 100%;
  overflow: auto;
}
@media (max-width: 600px) {
  .app-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

</style>
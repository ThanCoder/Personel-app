<template>
  <div class="sharedata-component">
    <!-- dialog -->
    <AddShareData 
    v-if="isShowAddShareData"
    @close="closeAddShareData"
    />

    <ShareDataListVue />
    <Content 
    v-if="store.isLogin" 
    @openAddShareData="openAddShareData"
    />
  </div>
</template>

<script setup>
import { userStore } from "../../stores";
import { ref } from 'vue'

import Content from "./Content.vue";
import ShareDataListVue from "./ShareDataList.vue";
//dialog
import AddShareData from "./AddShareData.vue";

const store = userStore();
const isShowAddShareData = ref(false)

function openAddShareData(){
  isShowAddShareData.value = true;
}

function closeAddShareData(){
  isShowAddShareData.value = false;
}


</script>

<style scoped>
.sharedata-component {
  display: flex;
  padding: 10px;
}
</style>
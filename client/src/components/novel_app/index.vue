<template>
  <div class="novel-app-component">
    <!-- add app dialog -->
    <AddAppDialog v-if="isShowAddAppDialog" @close="closeAddAppDialog" />
    <AppContextMenu
      v-if="isShowAppContextDialog"
      :app="chooseApp"
      @close="closeAppContextMenu"
      @deleteApp="deleteApp"
      @updateApp="openUpdateDialog"
    />
    <UpdateApp
      v-if="isShowAppUpdateDialog"
      :app="chooseApp"
      @close="closeUpdateDialog"
    />

    <AppList :apps="apps" @openContextMenu="openAppContextMenu" />

    <Content v-if="store.isLogin" v-on:showAddDialog="showAddDialog" />
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import AppList from "./list/AppList.vue";
import Content from "./content/Content.vue";
import AddAppDialog from "./dialog/AddAppDialog.vue";
import UpdateApp from "./dialog/UpdateApp.vue";
import AppContextMenu from "./dialog/AppContextMenu.vue";
//user
import { userStore } from "../../stores";

const apps = ref([]);
const chooseApp = ref({});
const isShowAddAppDialog = ref(false);
const isShowAppUpdateDialog = ref(false);
//context
const isShowAppContextDialog = ref(false);

const store = userStore();

function getAppList() {
  axios
    .get("/api/v2/novel-app")
    .then((res) => {
      // console.log(res.data);
      apps.value = res.data.apps;
    })
    .catch((err) => {
      console.log(err.response);
    });
}

function showAddDialog() {
  isShowAddAppDialog.value = true;
}

function closeAddAppDialog() {
  isShowAddAppDialog.value = false;
  apps.value = []
  getAppList();
}

//update
function openUpdateDialog(){
    isShowAppUpdateDialog.value = true;
    isShowAppContextDialog.value = false;
    apps.value = []
    getAppList()

}
function closeUpdateDialog(){
    isShowAppUpdateDialog.value = false;
    isShowAppContextDialog.value = false;
}

// context menu
function openAppContextMenu(app) {
  chooseApp.value = app;
  isShowAppContextDialog.value = true;
}

function closeAppContextMenu() {
  chooseApp.value = {};
  isShowAppContextDialog.value = false;
}

function removeById(id) {
  apps.value = apps.value.filter((a) => a.id !== id);
}

//app
function deleteApp(id) {
  axios
    .delete(`/api/v2/novel-app/${id}`)
    .then((res) => {
      console.log(res);
      removeById(id);
    })
    .catch((err) => {
      console.log(err.response);
    });
}

onMounted(() => {
  getAppList();
});
</script>

<style scoped>
.novel-app-component {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .novel-app-component {
    flex-direction: column-reverse;
    justify-content: flex-start;
  }
}
</style>
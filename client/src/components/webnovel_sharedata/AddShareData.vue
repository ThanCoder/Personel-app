<template>
  <div class="fixed">
    <div class="content-center">
      <div class="header">Add Share Data</div>
      <form class="t-form">
        <div class="form-group">
          <label>Title</label>
          <input type="text" placeholder="Title" v-model="title" />
        </div>
        <div class="form-group">
          <label>Note</label>
          <textarea placeholder="Note" v-model="note" />
        </div>
        
        <form @submit.prevent="addDownloadLink">
          <div class="form-group">
            <input
              type="text"
              placeholder="Download Link"
              v-model="downloadLinkText"
            />
          </div>
        </form>

        <!-- download link -->
        <div class="d-link">
            <div class="header">Download Link</div>
          <div v-for="link in downloadLinks" :key="link" class="link-item">
            {{ link }} <span @click="removeLink(link)" class="del">x</span>
          </div>
        </div>
      </form>
      <div class="btn-group">
        <button class="btn bg-red" @click="$emit('close','')" >Cancel</button>
        <button class="btn">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("");
const note = ref("");
const downloadLinkText = ref("");
const downloadLinks = ref(["one", "tow", "three"]);

function addDownloadLink() {
  if (downloadLinkText.value !== "") {
    downloadLinks.value.push(downloadLinkText.value);
    downloadLinkText.value = ''
  }
}

function removeLink(text){
    downloadLinks.value = downloadLinks.value.filter(d => d !== text); 
}

</script>

<style scoped>
.d-link {
    max-height: 150px;
    overflow-y: auto;
}
.link-item {
    font-size: 1.2rem;
    padding: 5px 3px;
    border-bottom: 1px solid #333;
}

.link-item .del {
    display: inline;
    color: red;
    cursor: pointer;
}
</style>
<template>
  <div class="app-detail">
    <div class="cover">
      <img
        :src="
          props.app.cover_url !== ''
            ? props.app.cover_url
            : 'https://i.postimg.cc/jScrHrjN/novel-icon.jpg'
        "
        alt="cover"
      />
    </div>
    <div class="content">
      <div class="title">{{ props.app.title }}</div>
      <div class="user">User: {{ props.app.user }}</div>
      <div class="version">Version: {{ props.app.version_code }}</div>
      <div class="version">Date: {{ props.app.date }}</div>
      <div class="url">
        <a :href="props.app.file_url" target="__blank">Download</a>
      </div>
      <details>
        <summary>Release Note</summary>
        <p>{{ props.app.note }}</p>
      </details>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  app: Object,
});
</script>

<style scoped>
.app-detail {
  width: 100%;
  background: #d4d4d4;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 5px rgb(194, 194, 194);
}
.url,
.url a {
  width: 100%;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  font-size: 16px;
}

.cover {
  width: 140px;
  height: 120px;
  object-fit: cover;
  padding: 5px;
  margin-right: 10px;
}

.content {
  padding: 10px;
}

@media (max-width: 600px) {
  .app-detail {
    flex-direction: column;
    width: 200px;
    margin-right: 10px;
    margin-bottom: 10px;
    justify-self: center;
  }
  .cover {
    /* margin-bottom: 15px; */
  }
}
@media (max-width: 450px) {
  .app-detail {
    width: 100%;
  }
  .content {
    margin-top: 10px;
  }
}
</style>
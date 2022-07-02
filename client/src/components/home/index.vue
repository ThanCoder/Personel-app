<template>
  <div class="home-component">
      <div class="btn-group">
        <router-link class="btn" to="/sharedata" >ShareData Files</router-link>
        <router-link class="btn" to="/novel-app" >Novel App</router-link>
        <router-link class="btn" to="/movie" >Movie</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home-component {
  margin: 1rem auto;
  padding: 10px;
}

</style>
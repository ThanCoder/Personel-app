<template>
  <div class="content">
    <button @click="$emit('showAddDialog','')" class="btn">Add App</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped>
.content {
  flex: 3;
  margin-bottom: 10px;
  padding: 10px;
  padding-top: 0;
}

</style>
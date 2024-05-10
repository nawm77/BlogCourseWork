<template>
  <div class="post">
    <h1><strong>{{ post.title }}</strong></h1>
    <p>Категория: <strong>{{ post.category }}</strong></p>
    <p>Автор: <strong>{{ post.author }}</strong></p>
    <p>{{ post.content }}</p>
    <div class="buttons">
      <button class="deleteButton" @click="$emit('delete')"><strong>Удалить</strong></button>
      <button class="archiveButton" @click="$emit('archive')"><strong>Архив</strong></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  word-wrap: break-word;
  white-space: normal;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 2%;
}

.deleteButton {
  background-color: #cf3a15;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
}

.archiveButton {
  background-color: #A3AE9E;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
}
</style>

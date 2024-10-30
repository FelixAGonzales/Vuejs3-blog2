<script>
export default {
  props: {
    photo: Object,
  },
};
</script>

<template>
  <div>
    <h1>Photo information</h1>
    <p>Title: {{ photo.title }}</p>
    <img v-bind:src="photo.image" />
    <p>Body: {{ photo.body }}</p>
  </div>
</template>

<style></style>
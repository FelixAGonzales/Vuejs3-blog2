<script>
export default {
  props: {
    photos: Array,
  },
};
</script>

<template>
  <div>
    <h1>All photos</h1>
    <div v-for="photo in photos" v-bind:key="photo.id">
      <h2>{{ photo.title }}</h2>
      <img v-bind:src="photo.image" />
      <p>Body: {{ photo.body }}</p>
      <button v-on:click="$emit('showPhoto', photo)">More Info</button>
    </div>
  </div>
</template>

<style></style>
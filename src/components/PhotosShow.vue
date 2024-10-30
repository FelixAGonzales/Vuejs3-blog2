<script>
export default {
  props: {
    photo: Object,
  },
  data: function () {
    return {
      editPhotoParams: {},
    };
  },
  created: function () {
    this.editPhotoParams = { ...this.photo};
  },
  methods: {
    handleSubmit: function () {
      this.$emit("updatePhoto", this.photo.id, this.editPhotoParams);
    }
  },
};
</script>

<template>
  <div>
    <h1>Photo information</h1>
    <p>Title: {{ photo.title }}</p>
    <img v-bind:src="photo.image" />
    <p>Body: {{ photo.body }}</p>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Title:
        <input v-model="editPhotoParams.title" type="text" />
      </div>
      <div>
        Image:
        <input v-model="editPhotoParams.image" type="text" />
      </div>
      <div>
        Body:
        <input v-model="editPhotoParams.body" type="text" />
      </div>
      <button type="submit">Update post</button>
    </form>
    <button v-on:click="$emit('destroyPhoto', photo)">Destroy photo</button>
  </div>
</template>

<style></style>
<script>
export default {
  data: function () {
    return {
      newPhotoParams: {},
    };
  },
  methods: {
    handleSubmit: function () {
      this.$emit("createPhoto", this.newPhotoParams);
      this.newPhotoParams = {};
    },
  },
};
</script>

<template>
  <div>
    <h1>New Photo</h1>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        Title:
        <input name="title" type="text" v-model="newPhotoParams.title"/>
      </div>
      <div>
        Image:
        <input name="image" type="text" v-model="newPhotoParams.image"/>
      </div>
      <div>
        Body:
        <input name="body" type="text"v-model="newPhotoParams.body"/>
      </div>
      <button type="submit">Create a new post</button>
    </form>
  </div>
</template>

<style></style>
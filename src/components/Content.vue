<script>
 import axios from "axios";
  import PhotosIndex from "./PhotosIndex.vue";
  import PhotosNew from "./PhotosNew.vue";
  import Modal from "./Modal.vue";
  import PhotosShow from "./PhotosShow.vue";

  export default {
    components: {
      PhotosIndex,
      PhotosNew,
      Modal,
      PhotosShow,
    },
    data: function () {
      return {
        photos: [],
        currentPhoto: {},
        isPhotoShowVisible: false,
      };
    },
   created: function () {
     this.handleIndexPhotos();
   },
   methods: {
     handleIndexPhotos: function () {
       axios.get("http://localhost:3000/posts.json").then((response) => {
         console.log("photos index", response);
         this.photos = response.data;
       });
     },
     handleCreatePhoto: function (params) {
      axios
        .post("http://localhost:3000/posts.json", params)
        .then((response) => {
          console.log("photos create", response);
          this.photos.push(response.data);
        })
        .catch((error) => {
          console.log("photos create error", error.response);
        });
    },
    handleShowPhoto: function (photo) {
      console.log("handleShowPhoto", photo);
      this.currentPhoto = photo;
      this.isPhotoShowVisible = true;
    },
    handleClose: function () {
      this.isPhotoShowVisible = false;
    }
   },
  };
</script>

<template>
  <main>
    <PhotosNew v-on:createPhoto="handleCreatePhoto"/>
    <PhotosIndex v-bind:photos="photos" v-on:showPhoto="handleShowPhoto" />
    <Modal v-bind:show="isPhotoShowVisible" v-on:close="handleClose">
        <PhotosShow v-bind:photo="currentPhoto"/>
    </Modal>
  </main>
</template>

<style></style>
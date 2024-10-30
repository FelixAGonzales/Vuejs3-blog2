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

    handleUpdatePhoto: function (id, params) {
      console.log("handleUpdatePhoto", id, params);
      axios
        .patch(`http://localhost:3000/posts/${id}.json`, params)
        .then((response) => {
          console.log("photos update", response);
          this.photos = this.photos.map((photo) => {
            if (photo.id === response.data.id) {
              return response.data;
            } else {
              return photo;
            }
          });
          this.handleClose();
        })
        .catch((error) => {
          console.log("photos update error", error.response);
        });
    },

    handleDestroyPhoto: function (photo) {
      axios.delete(`http://localhost:3000/posts/${photo.id}.json`).then((response) => {
        console.log("photos destroy", response);
        var index = this.photos.indexOf(photo);
        this.photos.splice(index, 1);
        this.handleClose();
      });
    },

    handleClose: function () {
      this.isPhotoShowVisible = false;
    },
   },
  };
</script>

<template>
  <main>
    <PhotosNew v-on:createPhoto="handleCreatePhoto"/>
    <PhotosIndex v-bind:photos="photos" v-on:showPhoto="handleShowPhoto" />
    <Modal v-bind:show="isPhotoShowVisible" v-on:close="handleClose">
      <PhotosShow v-bind:photo="currentPhoto" v-on:updatePhoto="handleUpdatePhoto" v-on:destroyPhoto="handleDestroyPhoto" />
    </Modal>
  </main>
</template>

<style></style>
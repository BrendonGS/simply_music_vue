<template>
  <div class="chords-edit">
    <h1>Edit Chord</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li> 
    </ul>
    <form v-on:submit.prevent="submit()">
      <div>
        Quality: <input v-model="chord.quality">
      </div>
      <div>
        Beats: <input type="number" v-model="chord.beats">
      </div>
      <div>
        Inversion: <input type="number" v-model="chord.inversion">
      </div>

      <input type="submit" value="Update" class="btn btn-warning">
    </form>

    <div class="btn btn-success" @click="destroyChord()">Delete</div>

  </div>
</template>

<style>
  
</style>

<script>
var axios = require('axios');

  export default {
    data: function() {
      return {
        chord: {
                  id: "",
                  beats: "",
                  quality: "",
                  inversion: "",
                  song_id: ""
                },
        errors: []
      };
    },
    created: function() {
      axios.get("/api/chords/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.chord = response.data;
      });
    },
    methods: {
      submit: function() {
        var params = {
                      beats: this.chord.beats,
                      quality: this.chord.quality,
                      inversion: this.chord.inversion
                      };


        axios.patch("/api/chords/" + this.chord.id, params)
          .then(response => {
           this.$router.push("/songs/" + this.chord.song_id);
          }).catch(error => {
          this.errors = error.response.data.errors;
          });
      },
      destroyChord: function() {
        axios
        .delete("/api/chords/" + this.$route.params.id)
        .then(response => {
          this.$router.push("/songs/" + this.chord.song_id);
        });
      }
    }
  }
</script>
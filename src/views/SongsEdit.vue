<template>
  <div class="songs-edit">
    <h1>Edit Song</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li> 
    </ul>
    <form v-on:submit.prevent="submit()">
        <div>
          Title: <input v-model="song.title">
        </div>
        <div>
          Artist: <input v-model="song.artist">
        </div>
        <div>
          Lyrics: <input v-model="song.lyrics">
        </div>
        <div>
          Beats Per Measure: <input v-model="song.beats_per_measure">
        </div>
        <div>
          Note Value: <input v-model="song.note_value">
        </div>
        <input type="submit" value="Update" class="btn btn-success">
     </form>
    
  </div>
</template>

<style>
  
</style>

<script>
var axios = require('axios');

  export default {
    data: function() {
      return {
        song: {
                  id: "",
                  title: "",
                  artist: "",
                  lyrics: "",
                  beats_per_measure: "",
                  note_value: "",
                },
        errors: []
      };
    },
    created: function() {
      axios.get("/api/songs/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.song = response.data;
      });
    },
    methods: {
      submit: function() {
        var params = {
                      title: this.song.title,
                      artist: this.song.artist,
                      lyrics: this.song.lyrics,
                      beats_per_measure: this.song.beats_per_measure,
                      note_value: this.song.note_value,
                      };


        axios.patch("/api/songs/" + this.song.id, params)
          .then(response => {
           this.$router.push("/songs/" + this.song.id);
          }).catch(error => {
          this.errors = error.response.data.errors;
          });
      }
    }
  }
</script>
<template>
  <div class="songs-edit">
    <h1 class="text-center mt-0 mb-5 pb-3 text-uppercase"><b>Edit Song</b></h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li> 
    </ul>
    <form v-on:submit.prevent="submit()">
<!--         <div>
          Title: <input v-model="song.title">
        </div>
        <div>
          Artist: <input v-model="song.artist">
        </div>
        <div>
          Beats Per Measure: <input v-model="song.beats_per_measure">
        </div>
        <div>
          Note Value: <input v-model="song.note_value">
        </div>
        <div>
          Lyrics: <input v-model="song.lyrics">
        </div>
        
 -->

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <input id="title" class="form-control" placeholder="Title*" name="title" type="text" required="" v-model="song.title">
                </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group">
                    <input id="artist" class="form-control" placeholder="Artist*" name="artist" type="text" required="" v-model="song.artist">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <input id="beats per measure" class="form-control" placeholder="Beats per measure*" name="beats per measure" type="text" v-model="song.beats_per_measure">
                </div>
            </div>
  
            <div class="col-sm-6">
                <div class="form-group">
                    <input id="note value" class="form-control" placeholder="Note value*" name="note value" type="text" v-model="song.note_value">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="form-group">
                    <textarea id="lyrics" class="form-control" rows="5" placeholder="Lyrics*" name="lyrics" required="" v-model="song.lyrics"></textarea>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <div class="form-group text-center">
                    <input type="submit" value="Update" class="btn btn-dark">
                </div>
            </div>
        </div>
     </form>
    
  </div>
</template>

<style>
h1 {
  padding-top: 40px;
}
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
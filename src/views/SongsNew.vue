<template>
  <div class="songs-new">
   <h1>New Song</h1>
   <ul>
     <li v-for="error in errors">{{ error }}</li>
   </ul>
   <form v-on:submit.prevent="submit()">
      <!-- <div>
        Title: <input v-model="newSongTitle">
      </div>
      <div>
        Artist: <input v-model="newSongArtist">
      </div>
      <div>
        Lyrics: <textarea v-model="newSongLyrics" height="30" width="60"></textarea>
      </div>
      <div>
        Beats Per Measure: <input v-model="newSongBeatsPerMeasure">
      </div>
      <div>
        Note Value: <input v-model="newSongNoteValue">
      </div>
      <input type="submit" value="Add New Song" class="btn btn-warning"> -->

      <div class="row">
          <div class="col-sm-6">
              <div class="form-group">
                  <input id="newSongTitle" class="form-control" placeholder="Title*" name="newSongTitle" type="text" required="" v-model="newSongTitle">
              </div>
          </div>

          <div class="col-sm-6">
              <div class="form-group">
                  <input id="newSongArtist" class="form-control" placeholder="Artist*" name="newSongArtist" type="text" required="" v-model="newSongArtist">
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-sm-6">
              <div class="form-group">
                  <input id="beats per measure" class="form-control" placeholder="Beats per measure*" name="newSongBeatsPerMeasure" type="text" v-model="newSongBeatsPerMeasure">
              </div>
          </div>
      
          <div class="col-sm-6">
              <div class="form-group">
                  <input id="newSongNoteValue" class="form-control" placeholder="Note value*" name="newSongNoteValue" type="text" v-model="newSongNoteValue ">
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-sm-12">
              <div class="form-group">
                  <textarea id="newSongLyrics" class="form-control" rows="5" placeholder="Lyrics*" name="newSongLyrics" required="" v-model="newSongLyrics"></textarea>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-sm-12">
              <div class="form-group text-center">
                  <input type="submit" value="Add New Song" class="btn btn-warning">
              </div>
          </div>
      </div>
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
      newSongTitle: "",
      newSongArtist: "",
      newSongLyrics: "",
      newSongBeatsPerMeasure: "",
      newSongNoteValue: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      console.log("New song created");
      var params = {
                    title: this.newSongTitle,
                    artist: this.newSongArtist,
                    lyrics: this.newSongLyrics,
                    beats_per_measure: this.newSongBeatsPerMeasure,
                    note_value: this.newSongNoteValue
                    };
      axios.post("/api/songs", params)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
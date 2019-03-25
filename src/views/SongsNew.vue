<template>
  <div class="songs-new">
   <h1>New Song</h1>
   <ul>
     <li v-for="error in errors">{{ error }}</li>
   </ul>
   <form v-on:submit.prevent="submit()">
<!--       <div>
        User Id: <input v-model="newSongUserId">
      </div> -->
      <div>
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
      <input type="submit" value="Add New Song" class="btn btn-warning">
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
<template>
  <div class="songs-show">
    <div align="center">
      
      <h1>{{song.title}}</h1>
      <span class="fa-stack">
        <span class="fa fa-square-o" style="font-size:36px;"></span>

        <strong class="fa-stack-1x">
          {{song.beats_per_measure + "/" + song.note_value}}
        </strong>
      </span>
      <h3>Artist: {{song.artist}}</h3>


      <router-link class="btn btn-primary" :to="'/songs/' + song.id + '/edit' ">Edit</router-link>
      <button class="btn btn-dark" v-on:click="destroySong()">Delete</button>
    </div>

    <div class="container">

        
        <div v-for="(lyric_line, index) in song.lyrics_displayed"> <!-- how do you find the index as you loop with v-for in vue -->
          <div class="row">
            <div class="col-3 chord-box" v-for="measure in song.chords_displayed[index]">
              <div class="row">
                <div class="col-3" v-for="beat in measure">{{ beat }}</div>
              </div>
            </div>
          </div>

          <div class="lyrics">
            {{ lyric_line }} <!-- call from a lyrics array by index -->
          </div>
        </div>

    </div>

    <div class="container">
      <h2>Chords</h2>
      <ul>
        <li v-for="chord in song.chords">{{ chord.display_notes }} <router-link class="btn-small btn-chord-edit" :to="'/chords/' + chord.id + '/edit'">Edit</router-link></li>
      </ul>
    </div>

      
      <form v-on:submit.prevent="submit()">
        <div class="row">
            <div class="col-4"></div>
          <div class="col-4">
            <div class="input-group mb-2">
              <input type="text" v-model="newChordQuality" class="form-control" placeholder="Quality" aria-label="" aria-describedby="basic-addon1">
            </div>
          </div>
        </div>

        
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4">
            <div class="input-group mb-2">
              <input type="number" v-model="newChordBeats" class="form-control" placeholder="Beats" aria-label="" aria-describedby="basic-addon1">
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-4"></div>
          <div class="col-4">
            <div class="input-group mb-2">
              <input type="number" v-model="newChordInversion" class="form-control" placeholder="Inversion" aria-label="" aria-describedby="basic-addon1">
            </div>
          </div>
        </div>
          

          <div class="input-group-prepend text-center">
            <input class="btn btn-outline-secondary" type="submit" value="Add Chord">
          </div>

      </form>

  </div>
</template>

<style>
  .chord-box {
    border: solid black 1px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .btn-chord-edit {
    background-color: #008;
    color: white;
  }

  .btn-chord-edit:hover {
    color: #001;
  }

  .card {
    border-radius: 30px;
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
                  chords_displayed: [],
                  lyrics_displayed: [],
                  chords: []
                },
        newChordQuality: "",
        newChordBeats: 1,
        newChordInversion: 0
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
      destroySong: function() {
        axios
        .delete("/api/songs/" + this.song.id)
        .then( response => {
          console.log("Success", response.data);
          this.$router.push("/");
        });
      },
      submit: function() {
        var params = {
                      quality: this.newChordQuality,
                      beats: this.newChordBeats,
                      inversion: this.newChordInversion,
                      song_id: this.$route.params.id
                      };
        console.log("New Chord Created");
        axios
          .post("/api/chords", params)
          .then(response => {
              axios.get("/api/songs/" + this.$route.params.id)
                .then(response => {
                  console.log(response.data);
                  this.song = response.data;
                });
              this.newChordQuality = "";
              this.newChordBeats = 1;
              this.newChordInversion = 0;
          });
      }
    }
  }
</script>
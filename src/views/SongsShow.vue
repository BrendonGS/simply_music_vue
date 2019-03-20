<template>
  <div class="songs-show">
    <div class="container" align="center">
      
      <h1>{{song.title}}</h1>
      <h3>Artist: {{song.artist}}</h3>
      <h4>Lyrics: {{song.lyrics}}</h4>
      <h3>Beats Per Measure: {{song.beats_per_measure}}</h3>
      <h3>Note Value: {{song.note_value}}</h3>


      <router-link class="btn btn-primary" :to=" 'songs' + song.id + '/edit' ">Edit</router-link>
      <button class="btn btn-warning" v-on:click="destroySong()">Delete</button>
    </div>

    <div>

      <div class="container">
        <div class="row">
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">Am7</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">D</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">G</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
        </div>

        <div class="lyrics">
          I never meant to cause you any sorrow
        </div>

        <div class="row">
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">Am7</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">D</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">G</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
        </div>

        <div class="lyrics">
          I never meant to cause you any pain
        </div>

        <div class="row">
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">Am7</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">D</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">G</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
        </div>

        <div class="lyrics">
          I only wanted to one time to see you laughing
        </div>

        <!-- formatted_chords = [[["Am7", "/", "/" "/"], ["Am7", "/", "/" "/"], ["Am7", "/", "/" "/"], ["Am7", "/", "/" "/"]], [["Am7", "/", "/" "/"], ["Am7", "/", "/" "/"], ["Am7", "/", "/" "/"], ["Am7", "/", "/" "/"]]] -->

        <!-- dynamic version -->

<!--    <div class="row" v-for="line in formatted_chords">
          <div class="col-3 chord-box" v-for="measure in line">
            <div class="row">
              <div class="col-3" v-for="beat in measure">{{ beat }}</div>
            </div>
          </div>
        </div> -->

        <div class="row">
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">Am7</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">D</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">G</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
        </div>

        <div class="lyrics">
          I only wanted to see you
        </div>

        <div class="row">
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">Am7</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">D</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
          <div class="col-3 chord-box">
            <div class="row">
              <div class="col-3">G</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
              <div class="col-3">/</div>
            </div>
          </div>
        </div>

        <div class="lyrics">
          Laughing in the purple rain
        </div>


      </div>
    </div>

      
      <form v-on:submit.prevent="submit()">
        
        <div class="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <input class="form-control" type="text" placeholder="Default input">   

          <div align="center">
            <button>Add</button> <span><button>Scale</button></span>
          </div>

        </div>
      </form>

  </div>
</template>

<style>
  .chord-box {
    border: solid black 2px;
    margin-top: 20px;
    margin-bottom: 20px;
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
                  note_value: ""
                }
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
        axios.delete("/api/songs/" + this.song.id)
        .then( response => {
          console.log("Success", response.data);
          this.$router.push("/");
        });
      }
    }
  }
</script>
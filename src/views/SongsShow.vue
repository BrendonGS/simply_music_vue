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

    <form>

      <div class="container">
        <div class="row">
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div class="row">
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div class="row">
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <div class="row">
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
          <div class="col-3">
            <input class="form-control" type="text" placeholder="Default input">   
          </div>
        </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
      </div>


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
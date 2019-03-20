<template>
  <div class="chords-edit">
    <h1>Edit Chord</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li> 
    </ul>
    <form v-on:submit.prevent="submit()">
        <div>
          Order: <input v-model="chord.order">
        </div>
        <div>
          Beats: <input v-model="chord.beats">
        </div>
        <div>
          Quality: <input v-model="chord.quality">
        </div>
        <div>
          Inversion: <input v-model="chord.inversion">
        </div>

        <input type="submit" value="Update" class="btn btn-warning">
        </form>
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                <label class="form-check-label" for="gridRadios1">
                  First radio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  Second radio
                </label>
              </div>
              <div class="form-check disabled">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
                <label class="form-check-label" for="gridRadios3">
                  Third radio
                </label>
              </div>
            </div>

            <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                <label class="form-check-label" for="gridRadios1">
                  First radio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                <label class="form-check-label" for="gridRadios2">
                  Second radio
                </label>
              </div>
              <div class="form-check disabled">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
                <label class="form-check-label" for="gridRadios3">
                  Third radio
                </label>
              </div>
            </div>
            
          </div>
        </fieldset>

        <div> 
          <input class="form-control" type="text" placeholder="Default input"> <!-- needs span -->  
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
        </div>
     
    
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
                  order: "",
                  beats: "",
                  quality: "",
                  inversion: "",
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
                      order: this.chord.order,
                      beats: this.chord.beats,
                      quality: this.chord.quality,
                      inversion: this.chord.inversion
                      };


        axios.patch("/api/chords/" + this.chord.id, params)
          .then(response => {
           this.$router.push("/chords/" + this.chord.id);
          }).catch(error => {
          this.errors = error.response.data.errors;
          });
      }
    }
  }
</script>
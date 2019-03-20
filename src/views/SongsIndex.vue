<template>
  <div class="songs-index">
    <h1 align="center">All Songs</h1>
    <div>

       <!-- <div v-for="song in songs">{{song.title}}</div> -->

       <table class="table">
         <thead class="thead-light">
           <tr>
             <th scope="col">Key</th>
             <th scope="col">Title</th>
             <th scope="col">Artist</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th scope="row">1</th>
             <td>Mark</td>
             <td>Otto</td>
           </tr>
           <tr>
             <th scope="row">2</th>
             <td>Jacob</td>
             <td>Thornton</td>
           </tr>
           <tr>
             <th scope="row">3</th>
             <td>Larry</td>
             <td>the Bird</td>
           </tr>
         </tbody>
       </table>

    </div> 
  </div>
</template>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      songs: [],
      currentSong: {}
    };
  },
  created: function() {
    axios.get("/api/songs")
      .then(response => {
        console.log(response.data);
        this.songs = response.data;
      });
  },
  methods: {
    
  }
};
</script>
<template>
  <div class="songs-index">
    <h1 align="center">All Songs</h1>
    <div>

       <!-- <div v-for="song in songs">{{song.title}}</div> -->

       <table class="table">
         <thead class="thead">
           <tr>
             <th scope="col">ID</th>
             <th scope="col">Title</th>
             <th scope="col">Artist</th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="song in songs">
             <th scope="row">{{ song.id }}</th>
             <td>
               <router-link :to="'/songs/' + song.id">{{ song.title }}</router-link>
             </td>
             <td>{{ song.artist }}</td>
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
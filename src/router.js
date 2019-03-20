import Vue from 'vue';
import Router from 'vue-router';
import SongsIndex from './views/SongsIndex.vue';
import About from './views/About.vue';
import SongsNew from './views/SongsNew.vue';
import SongsShow from './views/SongsShow.vue';
import ChordsShow from './views/ChordsShow.vue';
import SongsEdit from './views/SongsEdit.vue';
import ChordsEdit from './views/ChordsEdit.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'songs-index', component: SongsIndex },
    { path: '/songs/new', name: 'songs-new', component: SongsNew },
    { path: '/songs/:id', name: 'songs-show', component: SongsShow },
    { path: '/chords/:id', name: 'chords-show', component: ChordsShow },
    { path: '/songs/:id/edit', name: 'songs-edit', component: SongsEdit },
    { path: '/chords/:id/edit', name: 'chords-edit', component: ChordsEdit },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/about', name: 'about', component: About }
  ]
});

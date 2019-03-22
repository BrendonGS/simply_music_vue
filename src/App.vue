<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- nav bar shit goes below here -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/Signup">Signup</router-link> -->
    <!-- </div> -->

  <!-- Begin page -->
  <div id="wrapper">
      <!-- Top Bar Start -->
      <div class="topbar-mobile">
          <div class="logo">
              <a href="index.html"><img src="images/logo.png" alt="" class="" style="height: 44px;"></a>
              <button class="button-menu-mobile">
                  <i class="mdi mdi-menu"></i>
              </button>
          </div>
      </div>
      <!-- Top Bar End -->
      <!-- ========== Left Sidebar Start ========== -->
      <div class="left side-menu">

          <div class="slimscroll-menu" id="remove-scroll">

              <div class="logo">
                  <a href="index.html"><img src="images/logo.png" alt="" class="" style="height: 44px;"></a>
                  <p class="text-muted"> Get cha song weight up </p>
              </div>

              <!--- Sidemenu -->
              <div id="sidebar-menu">
                  <!-- Left Menu Start -->
                  <ul class="metismenu" id="side-menu">
                      
                      <li>
                        <router-link to="/"><span> Home</span></router-link>
                      </li>

                      <li>
                        <router-link to="/login"><span> Login</span></router-link>
                      </li>

                      <li>
                        <router-link to="/logout"><span> Logout</span></router-link>
                      </li>

                      <li>
                        <router-link to="/signup"><span> Sign Up</span></router-link>
                      </li>

                  </ul>

                  <div class="copyright-box">
                      <p>2019 © SimplyMusic </p>
                  </div>

              </div>
              <!-- Sidebar -->
              <div class="clearfix"></div>

          </div>
          <!-- Sidebar -left -->

      </div>
      <!-- Left Sidebar End -->

      <div class="page-wrapper">
          <section>
              <div class="container">
                  <div class="personal-space">
                    <router-view/>
                  </div>

                  <ul class="socials list-unstyled mb-0 text-center mt-5">
                    <li><a href="http://facebook.com"><i class="mdi mdi-facebook"></i></a></li>
                    <li><a href="http://twitter.com"><i class="mdi mdi-twitter"></i></a></li>
                    <li><a href="http://instagram.com"><i class="mdi mdi-instagram"></i></a></li>
                    <li><a href="http://pinterest.com"><i class="mdi mdi-pinterest"></i></a></li>
                  </ul>
              </div>
              <!-- end container -->
          </section>
      </div>
  </div>



  

    <!-- footer goes below here -->

  </div>
</template>

<style>
.page-wrapper {
  min-height: 600px;
}
.personal-space {
  min-height: 480px;
}
</style>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Lewis Hamilton</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/resume">Resume</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto"
          <b-nav-item-dropdown right>
             Using button-content slot -->
            <!-- <template slot="button-content">
              <em>Sign in</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>-->
      </b-collapse>  
    </b-navbar>
  </div>
</template>

<style scoped>
</style>
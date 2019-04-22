<template>
  <div>
    <b-jumbotron>
      <template slot="header">{{title}}</template>

      <template slot="lead">
        {{description}}  
      </template>

      <hr class="my-4">

      <p>
        {{type}}
      </p>

      <b-button variant="primary" target="blank" v-bind:href="checkOut_link">Check it out</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
  export default {
    props:[
      "title","description","type","checkOut_link"
    ]
  }
</script>
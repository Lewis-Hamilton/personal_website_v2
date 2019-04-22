<template>
   <b-container fluid>
     <b-row>
       <b-col lg="3" sm="12" v-for="card in data"
            v-bind:key="card.title">

         <b-card
            
            v-bind:title="card.title"
            v-bind:img-src="card.image_link"
            img-alt="Image"
            img-top
        >

        <b-card-text>{{card.description}}</b-card-text>
        <div slot="footer">
          <b-button v-bind:to="card.learnMore_link" variant="info">Learn More</b-button>
          <b-button v-bind:href="card.checkOut_link" target="blank" variant="dark">Check it out</b-button>
        </div>
      </b-card></b-col>
     </b-row>
    
   </b-container>
</template>

<script>
  import project_card from "./project_card.json"
  
  export default {
    data() {
      return {
        data:project_card
      }
    }
  }
</script>

<style>
  .card{
    
  }
</style>
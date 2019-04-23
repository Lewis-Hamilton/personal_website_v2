<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/lewishamilton-2aac2.appspot.com/o/david_glass.jpg?alt=media&token=d3496f2c-589d-4ded-a224-9b201f7b9684">
        <h1>Welcome!</h1>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/lewishamilton-2aac2.appspot.com/o/foresight_logo.png?alt=media&token=bf1594d7-7d6b-4cd1-b07b-6361e8383dbe"></b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/lewishamilton-2aac2.appspot.com/o/unity.jpg?alt=media&token=69226953-85e0-47a1-b751-5613cb226d7d"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
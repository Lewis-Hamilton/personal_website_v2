<template>
<div>
  <div class="mt-4">
    <h1>Experience</h1>
    <b-card img-src="https://firebasestorage.googleapis.com/v0/b/lewishamilton-2aac2.appspot.com/o/dgtc.jpg?alt=media&token=21f864b2-fe01-4bcb-8a0d-020a9f381d4b" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        <h3>Technician, Walmart Labs</h3>
        <h4>June 2018 - Present</h4>
        <p>Started on the Cloud Powered Checkout team working on deploying docker images. Currently working on the Test Enablement team configuring controllers and solving hardware issues.</p>

        <h3>Intern, Walmart Labs</h3>
        <h4>September 2017 - May 2018</h4>
        <p>Started on the Robotics and Augmented reality team. Used Angular and React. Later moved to the Point of Sales team working with docker.</p>
      </b-card-text>
    </b-card>

    <h1 align="right">Education</h1>
    <b-card img-src="https://firebasestorage.googleapis.com/v0/b/lewishamilton-2aac2.appspot.com/o/education.png?alt=media&token=201f188d-3df4-42b8-8c26-37ea3fffdedf" img-alt="Card image" img-right>
      <b-card-text>
        <h3>Bentonville High School</h3>
        <h4>August 2015 - present</h4>
        <p>Applied and selected to participate in the Ignite IT Solutions professional studies program at BHS for both Junior and Senior Year. Currently have a 3.6 GPA</p>

        <h3>Northwest Arkansas Community College</h3>
        <h4>August 2017 - present</h4>
        <p>Passed Intro to Computer Information and Intro to Programming Logic. Will start taking more classes in May. Currently have a 3.5 GPA</p>
      </b-card-text>
    </b-card>
  </div>

  <div>
    <h4>Skills</h4>
    <b-card-group deck>
      <b-card img-src="https://firebasestorage.googleapis.com/v0/b/lewishamilton-2aac2.appspot.com/o/skills.png?alt=media&token=ad6781f9-b619-49bc-aa13-94f0ebf744ab" img-alt="Card image" img-top>
        <b-card-text>
          <h4>Programming Experience:</h4>
            <p>HTML, CSS, Javascript, vue.js</p>

            <h4>Other Skills</h4>
            <p>Soldering, 3D-Modeling</p>
        </b-card-text>
      </b-card>

      <b-card img-src="https://firebasestorage.googleapis.com/v0/b/lewishamilton-2aac2.appspot.com/o/awards.png?alt=media&token=281a415e-80b9-46e5-95e7-1a8c3d74c6fc" img-alt="Card image" img-top>
        <b-card-text>
          <h3>Youth Leadership Team</h3>
          <h4>2018-2019</h4>
          <p>Plan activities and lead jr. high students every Wednesday night at Grace Point Church</p>

          <h3>Industrial Engineering Challenge</h3>
          <h4>2018</h4>
          <p>First place in the Industrial Engineering Challenge at the University of Arkansas.</p>

          <h3>Bright Field Middle School</h3>
          <h4>2019</h4>
          <p>Helped students learn to code in the middle school coding club</p>

          <h3>Bentonville High School Film</h3>
          <h4>2016-2017</h4>
          <p>Volunteered Friday nights at BHS football games to run the live streams. Switched cameras, filmed, etc..</p>
    </b-card-text>
      </b-card>
    </b-card-group>
  </div>
  </div>
</template>

<style scoped> 
@media screen and (max-width: 1000px) {
  .card-img-right{
    display: none;
  }

  .card-img-left{
    display: none;
  }

  .mt-4 h1{
    display: none;
  }
}
</style>
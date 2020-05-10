<template>
  <b-row class="background">
    <b-col cols="12">
      <vue-particles
        class='particles' color="#8b8b8b" :particleOpacity="0.5"
        :particlesNumber="80" shapeType="circle" :particleSize="1.5"
        linesColor="#6e6e6e" :linesWidth="3" :lineLinked="true"
        :lineOpacity="0.5" :linesDistance="100" :moveSpeed="1.5"
        :hoverEffect="true" hoverMode="grab" :clickEffect="true"
        clickMode="push"
      />
    </b-col>
  </b-row>
</template>

<style scoped>
  .background {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 0;
    background-color: black;
    background-repeat: no-repeat;

    background-position: center center;
    background-image: url('../assets/background.png');
  }
    .background .particles {
      width: 100vw;
      height: 100vh;
    }

</style>

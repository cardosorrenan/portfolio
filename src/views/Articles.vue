<template>
   <b-row class="background">
     <b-col>
      <vue-particles
        class='particles' color="#8b8b8b" :particleOpacity="0.7"
        :particlesNumber="80" shapeType="circle" :particleSize="3"
        linesColor="#6e6e6e" :linesWidth="3" :lineLinked="true"
        :lineOpacity="0.4" :linesDistance="100" :moveSpeed="1.5"
        :hoverEffect="true" hoverMode="grab" :clickEffect="true"
        clickMode="push"
      />
      <div class='header'>
        <div class="hexagon">
          <div class="hexagon-in1">
            <div class="hexagon-in2" />
          </div>
        </div>

        <hr class="my-2">

        <div class="name">
          <p>{{ name }}</p>
        </div>

        <hr class="my-1">

        <b-row class="d-inline-flex align-items-center">
          <font-awesome-icon
            spin
            class="icon mr-1"
            size='xs'
            :icon="['fa', 'cog']"
          />
          <vue-typer
            :text=array :repeat='Infinity' :shuffle='false'
            initial-action='typing' :pre-type-delay='50' :type-delay='5'
            :pre-erase-delay='1200' :erase-delay='10' erase-style='backspace'
            :erase-on-complete='false' caret-animation='expand'
          />
        </b-row>

        <hr class="my-3">

        <b-row>
          <a class="circle" @click="redirect(links.linkedin)">
            <font-awesome-icon class="icon" size='2x' :icon="['fab', 'linkedin-in']" />
          </a>
          <a class="circle" @click="redirect(links.github)">
            <font-awesome-icon class="icon" size='2x' :icon="['fab', 'github']" />
          </a>
          <a class="circle" @click="redirect(links.instagram)">
            <font-awesome-icon class="icon" size='2x' :icon="['fab', 'instagram']" />
          </a>
        </b-row>

        <router-link class="router" to="/home">
          <b-row class="d-md-flex justify-content-center btn-router align-items-center">
            <p class="name-router">home</p>
            <font-awesome-icon
              class="icon-router animated heartBeat"
              size='2x'
              :icon="['fa', 'caret-right']"
            />
          </b-row>
        </router-link>

      </div>
    </b-col>
  </b-row>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'HelloWorld',
  data() {
    return {
      name: 'Renan Cardoso',
      array: [
        ' starting...',
        ' ',
        ' graduando engenharia da computação',
        ' desenvolvedor',
        ' ',
      ],
      links: {
        linkedin: 'https://www.linkedin.com/in/renan-cardoso-0b79b6134/',
        github: 'https://github.com/cardosorrenan',
        instagram: 'https://www.instagram.com/cardosorrenan/',
      },
    };
  },
  components: {
    'vue-typer': VueTyper,
  },
  methods: {
    redirect(url) {
      const goToPage = url;
      window.open(goToPage, '_target');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style style='scss' scoped>

  @import url('https://fonts.googleapis.com/css?family=Abel|Baloo+2&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

  .background {
    width: 100vw !important;
    height: 100vh !important;
    background-color: black;
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: center -10%;
    background-image: url('../assets/background.png');
  }

  .particles {
    position: absolute;
    top: 0%;
    left: 0px;
    z-index: 0;
    width: 100vw;
    height: 100%;
  }

  .header {
    margin-top: 25% !important;
    margin-left: 10% !important;
    color: white;
    width: 60%;
    font-size: 10pt;
    position: absolute;
    z-index: 1;
  }

  .menu {
    margin-top: 20% !important;
    margin-left: 10% !important;
  }

  .item-menu {
    color: #ddd;
    font-size: 16pt;
    font-family: Abel, sans-serif;
  }

  .icon {
    color: rgb(0,223,252);
  }

  .btn-router {
    width: 150px;
    margin-left: 70% !important;
    margin-top: 40% !important;
    background-color: rgb(52,56,56);
  }

  .icon-router {
    color: #ddd;
    animation-duration: 2s !important;
    animation-iteration-count: infinite;
  }

  .name-router {
    color: rgb(0,223,252);
    font-size: 17pt;
    width: 110px;
    font-family: Abel, sans-serif;
  }

  .name {
    color: #ddd;
    font-size: 14pt;
    width: 110px;
    border-bottom: 3px ridge rgb(0,140,158);
    font-family: Abel, sans-serif;
  }

  .vue-typer {
    background-color: transparent;
  }

  .vue-typer .custom.char.typed {
    color: #D4D4BD;
    background-color: red;
    font-size: 8pt;
    font-family: 'Source Code Pro', sans-serif;
  }


  .vue-typer .custom.caret {
    width: 1px;
    opacity: 0.75;
    background-color: #D4D4BD;
  }

  .hexagon {
    width: 110px;
    height: 110px;
    display: block;
    margin: 20px;
    overflow: hidden;
    visibility: hidden;
    -webkit-transform: rotate(120deg);
    -moz-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    -o-transform: rotate(120deg);
    transform: rotate(120deg);
    cursor: pointer;
  }

  .hexagon-in1 {
    overflow: hidden;
    width: 100%;
    height: 100%;
    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }

  .hexagon-in2 {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    background-image: url(https://avatars2.githubusercontent.com/u/48356874?s=460&u=7a51c810b858176066b58eedf36b032991a1464c&v=4);
    visibility: visible;
    -webkit-transform: rotate(-60deg);
    -moz-transform: rotate(-60deg);
    -ms-transform: rotate(-60deg);
    -o-transform: rotate(-60deg);
    transform: rotate(-60deg);
  }

  .circle {

    background-color: rgb(52,56,56);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    width: 55px;
    height: 55px;
    margin-right: 5% !important;
  }

  .urss {
    border: 1px solid red;
  }

</style>

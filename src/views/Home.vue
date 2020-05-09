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
      <div class='main-info'>
        <div class="hexagon">
          <div class="hexagon-in1">
            <div class="hexagon-in2" />
          </div>
        </div>

        <hr class="my-1">

        <div class="name">
          <p>{{ name }}</p>
        </div>

        <hr class="my-1">

        <b-row class="d-inline-flex align-items-center">
          <font-awesome-icon
            spin
            class="text-dark mr-1"
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

        <hr class="my-4">

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
        <b-col class="router">
          <router-link to="ideas">
            <b-row class="ml-auto d-md-flex justify-content-center btn-router align-items-center">
              <p class="name-router">some ideas</p>
              <font-awesome-icon
                class="icon-router animated heartBeat"
                size='2x'
                :icon="['fa', 'caret-right']"
              />
            </b-row>
          </router-link>
          <router-link to="about">
            <b-row
              class="d-md-flex ml-auto mt-3 justify-content-center btn-router align-items-center">
              <p class="name-router">about</p>
              <font-awesome-icon
                class="icon-router animated heartBeat"
                size='2x'
                :icon="['fa', 'caret-right']"
              />
            </b-row>
          </router-link>

        </b-col>

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

<style style='scss'>

  @import url('https://fonts.googleapis.com/css?family=Abel|Baloo+2&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

  html, body {
    background-color: black;
  }

  .background {
    width: 100vw !important;
    height: 100vh !important;
    background-color: black;
    background-repeat: no-repeat;
    background-position: center -5%;
    background-image: url('../assets/background.png');
  }
  @media (max-width: 400px) {
    .background {
      background-size: 230%;
    }
  }
  @media (min-width: 400px) {
    .background {
      background-size: 200%;
    }
  }
  @media (min-width: 450px) {
    .background {
      background-size: 170%;
    }
  }
  @media (min-width: 600px) {
    .background {
      background-size: 130%;
    }
  }
  @media (min-width: 750px) {
    .background {
      background-size: 100%;
    }
  }
  @media (min-width: 850px) {
    .background {
      background-size: 65%;
    }
  }

  .particles {
    position: absolute;
    top: 0%;
    left: 0px;
    z-index: 0;
    width: 100vw;
    height: 100%;
  }

  .main-info {
    margin-top: 10vh !important;
    color: white;
    font-size: 10pt;
    position: absolute;
    z-index: 1;
  }
  @media (max-width: 400px) {
    .main-info {
      margin-left: 10% !important;
      margin-right: 10% !important;
      width: 80%;
    }
  }
  @media (min-width: 400px) {
    .main-info {
      margin-left: 15% !important;
      margin-right: 15% !important;
      width: 70%;
    }
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

  .router {
    margin-top: 10vh !important;
  }
  @media (min-width: 400px) {
    .router {
      margin-top: 8vh !important;
    }
  }

  .btn-router {
    width: 150px;
    margin-left: auto;
    background-color: rgb(52,56,56);
  }
  @media (min-width: 1025px) {
    .btn-router {
      opacity: 0.7;
    }
    .btn-router:hover {
      opacity: 1;
    }
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
    text-decoration: none !important;
    border: transparent !important;
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
    font-size: 8pt;
    font-family: 'Source Code Pro';
  }

  .vue-typer .custom.caret {
    width: 1px;
    opacity: 0.75;
    background-color: #D4D4BD;
  }

  .hexagon {
    width: 90px;
    height: 90px;
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
    cursor: pointer;
    transition: 0.3s;
  }
  @media (max-width: 400px) {
    .circle {
      width: 45px !important;
      height: 45px !important;
    }
  }
  @media (min-width: 1025px) {
    .circle {
      opacity: 0.7;
    }
    .circle:hover {
      opacity: 1;
    }
  }

</style>

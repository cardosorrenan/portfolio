<template>
   <b-row class="background">
      <vue-particles
        class='particles'
        color="#8b8b8b"
        :particleOpacity="0.7"
        :particlesNumber="170"
        shapeType="circle"
        :particleSize="3"
        linesColor="#6e6e6e"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="100"
        :moveSpeed="1.5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      />
      <div class='header'>
        <div class="name">
          <p >{{ name }}</p>
        </div>
        >
        <vue-typer
          :text=array
          :repeat='Infinity'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='45'
          :pre-erase-delay='1500'
          :erase-delay='20'
          erase-style='backspace'
          :erase-on-complete='false'
          caret-animation='expand'
        ></vue-typer>
      </div>
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
        ' graduando-eng-da-computacao.tar.gz',
        ' desenvolvedor-fullstack.*',
        ' .',
        ' ',
        ' .',
        ' ',
      ],
    };
  },
  components: {
    'vue-typer': VueTyper,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style style='scss'>

  @import url('https://fonts.googleapis.com/css?family=Abel|Baloo+2&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

  .background {
    width: 100% !important;
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
    width: 100%;
    height: 100%;
  }

  .header {
    position: absolute;
    top: 15%;
    left: 15%;
    z-index: 1;
    color: white;
    font-size: 10pt;
  }

  .layer-2 {
    width: 30% !important;
    position: absolute;
    top: 60%;
    left: 15%;
    z-index: 1;
  }

  .name {
    color: #ddd;
    font-size: 14pt;
    opacity: 0.75;
    width: 110px;
    border-bottom: 3px ridge rgba(221,221,221,0.25);
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


</style>

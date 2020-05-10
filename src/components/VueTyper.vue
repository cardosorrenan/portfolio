<template>
  <vue-typer
    :text=array
    :repeat='Infinity'
    :shuffle='false'
    initial-action='typing'
    :pre-type-delay='50'
    :type-delay='5'
    :pre-erase-delay='1200'
    :erase-delay='10'
    erase-style='backspace'
    :erase-on-complete='false'
    caret-animation='expand'
  />
</template>
<script>

import { VueTyper } from 'vue-typer';

export default {
  name: 'VueTyper',
  components: {
    'vue-typer': VueTyper,
  },
  data() {
    return {
      array: [
        ' starting...',
        ' ',
        ' graduando engenharia da computação &',
        ' desenvolvedor &',
        ' eterno aprendiz da tecnologia!',
        ' ',
      ],
    };
  },
};
</script>
<style style='scss'>

   @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

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

<template>
  <b-col>
    <main-title />
    <about />
  </b-col>
</template>

<script>

import MainTitle from '../components/MainTitle.vue';
import About from '../components/About.vue';

export default {
  name: 'Home',
  components: {
    'main-title': MainTitle,
    About,
  },
};
</script>

<template>
  <a @click="goTo('https://github.com/cardosorrenan')">
    <div class="git-container">
      <b-row class="mt-3 ml-4">
        <b-col cols='1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" width="12" height="16"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
        </b-col>
        <b-col class="git-name pl-2 " cols="9">
          cardosorrenan
        </b-col>
        <b-col cols="1" class="pr-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" width="8" height="16"><path fill-rule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"></path></svg>
        </b-col>
      </b-row>
      <b-row class="git-body mt-4 ml-4">
        it ain't much, but it's honest work
      </b-row>
      <b-row align-v="center" class="mt-4 ml-4">
        <div class="circle-footer "/>
        <p class="git-body ml-1 mr-4">Fortran</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" width="14" height="16" class="ml-3"><path class="icon-footer" fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
        <p class="git-body ml-1 mr-4">99</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16" class="icon-footer"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
        <p class="git-body ml-1 mr-4">99</p>
      </b-row>
    </div>
  </a>
</template>
<script>
export default {
  methods: {
    goTo(link) {
      window.open(link, '_target');
    },
  },
};
</script>
<style scoped>
  .git-container {
    width: 250px;
    height: 145px;
    border: 1px solid rgba(0,0,0,0.2);
    cursor: pointer;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    margin: 30px auto !important;
  }

  .git-name {
    font-weight: 600;
    color: #0366d6;
  }

  .git-body {
    font-size: 9pt;
    font-weight: 300;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: gray;
  }

  .circle-footer {
    width: 12.5px;
    height: 12.5px;
    border-radius: 100%;
    background-color: #4d41b1;
  }

  .icon-footer {
    fill: rgba(0,0,0,0.6);
  }
</style>

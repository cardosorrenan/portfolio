<template>
   <b-row>
      <home-background />
      <b-row class="main w-100 h-100">
        <b-col cols="12" class="infos h-100">
          <img
            :src="linkAvatar"
            class="rounded-circle my-2"
            width="100"
            height="100"
          >

          <div class="name my-2">
            <p>{{ name }}</p>
          </div>

          <b-row class="d-inline-flex align-items-center mb-4">
            <font-awesome-icon
              class="text-dark mr-1"
              :icon="['fa', 'cog']"
              size='xs'
              spin
            />
            <vue-typer />
          </b-row>

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

          <b-col class="mt-5 pt-5">
            <router-link to="ideas">
              <b-row class="btn-router text-center ml-auto">
                <b-col cols="10">
                  <p class="pl-2 name-router">posts</p>
                </b-col>
                <b-col class="pr-3" cols="2">
                  <font-awesome-icon
                    class="icon-router animated heartBeat"
                    size='2x'
                    :icon="['fa', 'caret-right']"
                  />
                </b-col>
              </b-row>
            </router-link>
            <router-link to="about">
              <b-row class="btn-router text-center ml-auto mt-3">
                <b-col cols="10">
                  <p class="pl-3 name-router">about</p>
                </b-col>
                <b-col class="pr-3" cols="2">
                  <font-awesome-icon
                    class="icon-router animated heartBeat"
                    size='2x'
                    :icon="['fa', 'caret-right']"
                  />
                </b-col>
              </b-row>
            </router-link>
          </b-col>
        </b-col>
      </b-row>
   </b-row>
</template>

<script>
import VueTyper from '../components/VueTyper.vue';
import HomeBackground from '../components/HomeBackground.vue';

export default {
  name: 'HelloWorld',
  data() {
    return {
      name: 'Renan Cardoso',
      linkAvatar: 'https://avatars2.githubusercontent.com/u/48356874?s=460&u=7a51c810b858176066b58eedf36b032991a1464c&v=4',
      links: {
        linkedin: 'https://www.linkedin.com/in/renan-cardoso-0b79b6134/',
        github: 'https://github.com/cardosorrenan',
        instagram: 'https://www.instagram.com/cardosorrenan/',
      },
    };
  },
  components: {
    'vue-typer': VueTyper,
    'home-background': HomeBackground,
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

  .main {
    position: absolute;
    z-index: 1;
  }
    .main .infos {
      padding-left: 10vw !important;
      padding-right: 10vw !important;
      padding-top: 10vh !important;
    }
      .main .infos .name {
        color: #ddd;
        font-size: 14pt;
        width: 110px;
        border-bottom: 3px ridge rgb(0,140,158);
        font-family: Abel, sans-serif;
      }
      .main .infos .circle {
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
        .main .infos .circle .icon {
          color: rgb(0,223,252);
        }

      .main .infos .btn-router {
        width: 150px;

        background-color: rgb(52,56,56);

      }
         .main .infos .btn-router .icon-router {
          color: #ddd;
          animation-duration: 2s !important;
          animation-iteration-count: infinite;
          color: rgb(0,223,252);
        }

        .main .infos .btn-router .name-router {
          color: rgb(0,223,252);
          width: 110px;
          font-size: 17pt;
          font-family: Abel, sans-serif;
        }

      @media (min-width: 1025px) {
         .main .infos .btn-router {
          opacity: 0.7;
        }
         .main .infos .btn-router:hover {
          opacity: 1;
        }
         .main .infos .circle {
          opacity: 0.7;
        }
         .main .infos .circle:hover {
          opacity: 1;
        }
      }

</style>

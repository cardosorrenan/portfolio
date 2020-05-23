<template>
  <b-row class="background mb-5" align-h="center">
    <router-link class='router' to="/">
      <b-row
        align-h="center"
        align-v="center"
        class="btn-router"
      >
        <font-awesome-icon
          class="icon-router animated heartBeat"
          size='1x'
          :icon="['fa', 'caret-left']"
        />
        <p class="name-router mx-1">home</p>
      </b-row>
    </router-link>

    <b-row class="title-page" align-v="center">
      <p class="title-name mx-3">{{hello}}</p>
      <font-awesome-icon
        class="title-icon animated wobble" :icon="['fa', 'hand-spock']" />
    </b-row>
    <b-row class="card mb-5" >

      <b-row align-v="center" class="card-top p-2 mb-3">
         <p class="pl-3">{{textTop}}</p>
         <img class="card-top-img ml-auto" @click="changeLang" src="../assets/changeLang.png">
      </b-row>

      <b-row>
        <b-col align-self="center" class="col-avatar d-inline-flex justify-content-center" md="4">
          <img class="card-avatar mb-3" src="../assets/avatar.png"/>
        </b-col>
        <b-col class="col-avatar " md="8" >
           <p class="text-card">
            {{ textMain }}
          </p>
        </b-col>
      </b-row>

      <p class="text-card mr-3">
        {{ textGit }}
      </p>
      <git-card v-if="windowWidth > 450"/>
      <git-card-less v-else />
      <br>
      <p class="text-card mr-3">
        {{ textWorkTools }}
      </p>
      <div class="container-images">
        <img
          v-for="(tech, i) in techs"
          :key="i"
          :src="tech.img"
          class="image"
          @click="goTo(tech.link)"
        />
      </div>

      <br>

      <div class="contact mb-4">
        <font-awesome-icon
          class="mr-2 icon-footer-card"
          :icon="['fa', 'envelope']"
        />
        <p class="text">renanhc96@gmail.com</p>
      </div>
      <div class="contact mb-4">
        <font-awesome-icon
          class="mr-2 icon-footer-card"
          :icon="['fa', 'map-marked-alt']"
        />
        <p class="text">Everywhere, on web</p>
      </div>
      <div class="contact mb-5">
        <font-awesome-icon
          class="mr-2 icon-footer-card"
          :icon="['fa', 'file-export']"
        />
        <a :href="pdfLink" download>
          <p class="ml-2 p-2 text-light icon-cv">Download CV</p>
        </a>
      </div>
    </b-row>
  </b-row>
</template>

<script>
/* eslint-disable  no-unused-vars */
// import pdfFile from '../assets/cv.pdf';
import filePDF from '../assets/cv.pdf';
import GitCard from '../components/GitCard.vue';
import GitCardLess from '../components/GitCardLess.vue';
/* eslint-disable */

export default {
  components: {
    GitCard,
    GitCardLess,
  },
  mounted() {
    this.init();
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  methods: {

    init() {
      this.textTop = this.textTopEnUs;
      this.textMain = this.textMainEnUs;
      this.textGit = this.textGitEnUs;
      this.textWorkTools = this.textWorkToolsEnUs;
    },
    changeLang() {
      if (this.lang === 0) {
        this.textTop = this.textTopPtBr;
        this.textMain = this.textMainPtBr;
        this.textGit = this.textGitPtBr;
        this.textWorkTools = this.textWorkToolsPtBr;
        this.lang = 1;
      } else {
        this.textTop = this.textTopEnUs;
        this.textMain = this.textMainEnUs;
        this.textGit = this.textGitEnUs;
        this.textWorkTools = this.textWorkToolsEnUs;
        this.lang = 0;
      }
    },
    goTo(link) {
      window.open(link, "_target");
    },
  },
  data() {
    return {
      // pdf: pdfFile,
      windowWidth: window.innerWidth,
      url: '../assets/cv.pdf',
      pdfLink : require('../assets/cv.pdf'),
      lang: 0,
      hello: '<HelloWorld />',
      textTop: '',
      textGit: '',
      textWorkTools: '',
      textMain: '',
      textMainPtBr: `Sou Renan Cardoso e atualmente morando em Sobral (CE).

        Com quase dois anos, estou focado em criar sistemas web & aplicações mobile utilizando principalmente as tecnologias da stack javascript.

        Encontro-me graduando o curso de Engenharia da Computação pela Universidade Federal do Ceará. Meu CV está ao final da página :)

        Interesses:

        » Desenvolvimento Web
        » Computação em Nuvem
        » Data Science
        » IoT
        » Eletrônica em Geral

        `,
      textMainEnUs: `Hi, my name is Renan Cardoso and currently living at Sobral (CE).

        Almost two years, i'm focused on developing web systems and mobile applications using specially the technologies of the javascript stack.

        I'm studying Computer Engineering course at Universidade Federal do Ceará. My resume is included at the bottom of the page :)

        Interests:

        » Web Development
        » Cloud Computing
        » Data Science
        » IoT
        » Electronics (General)

        `,
      textTopPtBr: 'Opa...',
      textTopEnUs: 'Hey...',
      textGitPtBr: "Sempre que possível compartilho meus projetos e estudos no github. Dê uma conferida:",
      textGitEnUs: 'Whenever possible... i\'m sharing my projects and studies on github. Take a look on my repo\'s:',
      textWorkToolsPtBr: 'Neste momento, essas são as tecnologias que estou utilizando no trabalho:',
      textWorkToolsEnUs: 'At this time, these are the technologies i\'m using at job:',
      techs: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png',
          link: 'https://nodejs.org/en/about/'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png',
          link: 'https://vuejs.org/'
        },
        {
          id: 3,
          img: 'https://symbols.getvecta.com/stencil_73/32_adonisjs-icon.95407caf46.svg',
          link: 'https://adonisjs.com/'
        },
        {
          id: 4,
          img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png',
          link: 'https://www.mongodb.com/'
        },
        {
          id: 5,
          img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png',
          link: 'https://www.postgresql.org/'
        },
        {
          id: 6,
          img: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png',
          link: 'https://github.com/python'
        },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style style='scss' scoped>

  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400&display=swap');

  .background {
    min-height: 100vh;
    width: 100vw;
    background-color: #d2efff;
    background-image: linear-gradient(0deg, #d2efff 27%, #f2f9ff 100%);
  }
  .br {
    line-height: 200px !important;
  }
  .title-page {
    background-color:rgb(52,56,56) ;
    height: 75px;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
  }
    .title-page .title-name {
      color: rgb(0,223,252);
      font-size: 16pt;
      font-weight: 500;
      font-family: Abel, sans-serif;
      text-decoration: none !important;
      border: transparent !important;
    }

    .title-page .title-icon {
      color: rgb(0,223,252);
      font-size: 13pt;
      animation-duration: 2s !important;
      animation-iteration-count: infinite;
    }

  .router .btn-router {
    width: 75px;
    height: 75px;
    border-radius: 100%;
    position: fixed;
    z-index: 5;
    right: 10%;
    bottom: 10%;
    background-color: rgb(52,56,56);
  }
    .router .btn-router .icon-router {
      color: rgb(0,223,252);
    }
    .router .btn-router .name-router {
      color: rgb(0,223,252);
      font-size: 12pt;
      font-family: Abel, sans-serif;
    }

  .card {
    color: black;
    width: 85vw;
    background-color: #fdfdfd;
    font-family: Abel, sans-serif;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    margin-top: 105px !important;
  }
    .card .text-card {
      font-family: 'Inconsolata', monospace;
      opacity: 0.7;
      text-align: justify;
      font-size: 10pt;
      font-weight: 500;
      white-space: pre-line;
      line-height: 20px;
      margin: 5px 20px 0px 20px !important;
    }
    @media (min-width: 400px) {
      .card .text-card {
        font-size: 12pt;
      }
    }
    @media (min-width: 750px) {
      .card .text-card {
        font-size: 14pt;
        margin: 20px 50px 0px 50px !important;
      }
    }
    .card .card-avatar {
      width: 50vw;
      height: 50vw;
    }

    @media (min-width: 750px) {
      .card .card-avatar {
        padding-right: 50px !important;
        width: 35vw;
        height: 35vw;
      }
    }
    @media (min-width: 960px) {
      .card .card-avatar {
        padding-right: 0px !important;
        width: 20vw;
        height: 20vw;
      }
    }

    .card .card-top {
      font-family: 'Inconsolata', monospace;
      opacity: 0.8;
      text-align: justify;
      font-size: 12pt;
      color: #fdfdfd;
      background-color: rgb(52,56,56);
      font-weight: 700;
      border-radius: 3px;
    }
    .card .card-top .card-top-img {
      width: 57px;
      height: 36px;
      padding: 5px !important;
      border-radius: 100%;
      cursor: pointer;
      background-color: rgba(255,255,255,0.1);
      box-shadow: 1px 1px 3px rgba(0,0,0,0.35);
    }
    .card .container-images {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items: space-evenly;
      margin: 30px auto !important;
      width: 57vw;
      height: 36vw;
    }
    @media (min-width: 450px) {
      .card .container-images {
        width: 38vw;
        height: 26vw;
      }
    }
    @media (min-width: 750px) {
      .card .container-images {
        width: 40vw;
        height: 7vw;
      }
    }
      .card .container-images .image {
        width: 15vw;
        height: 15vw;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        transition: 0.8s;
        cursor: pointer;
      }
      @media (min-width: 450px) {
        .card .container-images .image {
          width: 10vw;
          height: 10vw;
        }
      }
      @media (min-width: 750px) {
        .card .container-images .image {
          width: 5vw;
          height: 5vw;
        }
      }
        .card .container-images .image:hover {
          filter: blur(1px);
        }
        @media (min-width: 750px) {
          .card .container-images .image:hover {
            filter: blur(2px);
          }
        }
    .card .contact {
      display: flex;
      align-items: center;
      margin-left: 40px !important;
    }
      .card .contact .text {
        font-family: 'Inconsolata', monospace;
        margin-left: 10px !important;
        opacity: 0.7;
        text-align: start;
        font-size: 12pt;
        font-weight: 500;
      }
      .card .contact .icon-footer-card {
        height: 20pt;
        color:  #0366d6;
      }
      @media (min-width: 750px) {
        .card .contact .icon-footer-card {
          font-size: 20pt;
        }
      }
      .card .contact .icon-cv {
        font-family: 'Inconsolata', monospace;
        color: white;
        border-radius: 10px;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.35);
        background-color:  #1867c0 !important;
        cursor: pointer;
      }

</style>

<template>
  <b-row class="background" align-h="center">
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
        <p class="name-router mx-2">home</p>
      </b-row>
    </router-link>

    <b-row class="title-page" align-v="center">

      <p class="title-name ml-3 mr-3">sinapses 2 bytes</p>
      <font-awesome-icon class="title-icon animated wobble ml-2" :icon="['fa', 'mug-hot']" />
    </b-row>

    <b-card-group class="card-group d-inline-flex flex-column">

      <b-card
        v-for="(article, i) in articles"
        :key="i"
        no-body
        class="card mb-3"
      >
        <b-row>
          <b-card-img
            :src="article.image"
            class="image"
          />
          <h3 class="title">{{ article.title }}</h3>
          <p class="date ml-auto">{{ article.date }}</p>
        </b-row>
      </b-card>
    </b-card-group>
  </b-row>
</template>

<script>

export default {

  data() {
    return {
      articles: [
        {
          id: 1,
          image: 'https://picsum.photos/id/85/300/300/',
          title: 'working on something... :D  ',
          date: 'soon',
        },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style style='scss'>

  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400&display=swap');

  .background {
    min-height: 100vh;
    width: 100vw;
    background-color: #d2efff;
    background-image: linear-gradient(0deg, #d2efff 27%, #f2f9ff 100%);
  }

  .title-page {
    background-color:rgb(52,56,56) ;
    height: 10vh;
    width: 100vw !important;
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
      font-size: 15pt;
      animation-duration: 2s !important;
      animation-iteration-count: infinite;
    }

  .router .btn-router {
    width: 90px;
    height: 90px;
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
      font-size: 14pt;
      font-family: Abel, sans-serif;
  }
  .card-group {
    width: 90vw;
    position: absolute;
    top: 13vh;
  }
  @media screen and (min-width: 750px) {
    .card-group {
      width: 675px;
    }
  }
    .card-group .card {
      color: black;
      background-color: transparent;
      font-family: Abel, sans-serif;
      background-color: white;
      border-radius: 10px;
      border: 0px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      min-height: 25vw;
      box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
      transition: 0.7s;
    }
    @media screen and (min-width: 600px) {
      .card-group .card {
        min-height: 150px;
      }
    }
    .card-group .card:hover {
      filter: blur(1px); /* Chrome, Safari, Opera */
      background-color: #f5f5f5;
    }
      .card-group .card .image {
        padding: 5px !important;
        transform: rotate(-2deg);
        border-radius: 20px;
        width: 25vw;
        border-top-right-radius: 0%;
      }
      @media screen and (min-width: 600px) {
        .card-group .card .image {
          width: 150px;
        }
      }
        .card-group .card .title {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: justify;
          width: 45vw;
          font-size: 9pt;
          font-family: 'Inconsolata', monospace;
          padding-left: 1vw !important;
        }
        @media screen and (min-width: 450px) {
          .card-group .card .title {
            font-size: 12pt;
          }
        }
        @media screen and (min-width: 750px) {
          .card-group .card .title {
            font-size: 14pt;
            width: 337.5px;
          }
        }
        .card-group .card .date {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 15vw;
          opacity: 0.75;
          font-size: 8pt;
          padding-right: 1vw !important;
        }
        @media screen and (min-width: 750px) {
          .card-group .card .date  {
            width: 112.5px;
          }
        }


</style>

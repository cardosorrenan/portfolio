<template>
  <b-col class="rerou">
    <router-link class='router' to="/">
      <b-row
        class="d-md-flex ml-auto mt-3 justify-content-center btn-router align-items-center">
        <font-awesome-icon
          class="icon-router animated heartBeat"
          size='1x'
          :icon="['fa', 'caret-left']"
        />
        <p class="name-router">home</p>
      </b-row>
    </router-link>
    <b-card-group class="card-group" deck>
      <b-card
        v-for="(article, i) in articles"
        :key="i"
        no-body
        class="card"
      >
        <b-row no-gutters>

            <b-card-img
              :src="article.image"
              alt="Image"
              class="image"
            />


            <b-card-body class="card-body">
              <h3 class="title">{{ article.title }}</h3>
              <p class="date ml-auto">{{ article.date }}</p>
            </b-card-body>


        </b-row>
      </b-card>
    </b-card-group>
  </b-col>
</template>

<script>

export default {

  data() {
    return {
      articles: [
        {
          image: 'https://picsum.photos/400/400/?image=1',
          title: 'This is a wider card with supporting text as a natural',
          date: '27/10/2020',
        },
        {
          image: 'https://picsum.photos/400/400/?image=2',
          title: 'This content is a little bit longer',
          date: '04/09/2020',
        },
        {
          image: 'https://picsum.photos/400/400/?image=3',
          title: 'Text as a natural lead-in to additional content. This content is a little bit longer.',
          date: '21/08/2020',
        },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style style='scss' scoped>
  .rerou {
    position: absolute;
    min-height: 100vh;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  }

  .router {
    border: 1px solid red;
  }

  .name-router {
    color: rgb(0,223,252);
    font-size: 10pt;
    font-family: Abel, sans-serif;
    text-decoration: none !important;
    border: transparent !important;
  }

  .btn-router {
    border: 1px solid red;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    position: fixed;
    z-index: 5;
    right: 10%;
    bottom: 10%;
    transition: 2s;
  }

  .card-group {
    margin-top: 8vh !important;
    margin-left: 10px !important;
    margin-right: 10px !important;
    padding-left: 10px !important;
    padding-top: 4vw !important;
    padding-bottom: 4vw !important;
    padding-right: 10px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card {
    color: black;
    background-color: transparent;
    border: 0px;
    font-family: Abel, sans-serif;
    box-shadow: 0px 2px 2px rgba(0,0,0,0.2);
    padding-bottom: 5px !important;
    padding-top: 5px !important;
    margin-bottom: 20px !important;
  }
  .card:hover {

  }

  .image {
    width: 85px;
    margin-right: 15px !important;
    margin-left: 5px !important;

  }

  .title {

    font-size: 10pt;

    width: 50vw;
    border: 1px solid red;

  }

  .date {
    text-align: center;
    margin-right: 5px !important;
    font-size: 7pt;

  }

  .card-body {
    display: flex;
    justify-content: flex-start;
    align-items: center;

  }

</style>

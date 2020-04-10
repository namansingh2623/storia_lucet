<template>

  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    autoplay="1"
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    class="bg-transparent"
    control-color="black"
  >
    <q-carousel-slide class="row flex flex-center"  v-for="(slide) in slideImages" :name="slide.id" v-bind:key="slide.id" >
      <q-img class="col-8  self-center" ratio="1" :src="slide.srcs" style=""></q-img>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
    export default {
        name: "topCarousal",
      data(){
          return{
            slide: 1,
            slideImages:[
              {id:'1',srcs:'https://4cs.gia.edu/wp-content/uploads/2017/05/Hero_CARAT-WEIGHT-6Greys_700x354.jpg'},
              {id:'2',srcs:'https://4cs.gia.edu/wp-content/uploads/2016/08/Hero_Color_990x500.jpg'},
              {id:'3',srcs:'https://4cs.gia.edu/wp-content/uploads/2016/08/Hero_Clarity_990x500.jpg'},
              {id:'4',srcs:'https://4cs.gia.edu/wp-content/uploads/2016/08/Hero_DIAMOND_CUT_990x500_EN.jpg'},
              {id:'5',srcs:'https://4cs.gia.edu/wp-content/uploads/2016/08/Hero_Carat-Weight_990x500.jpg'},
            ],
          }
      }

    }
</script>

<style scoped>

</style>

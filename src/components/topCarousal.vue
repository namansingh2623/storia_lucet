<template>

  <q-carousel
    animated
    v-model="slide"
    navigation
    infinite
    autoplay
    arrows
    transition-prev="slide-right"
    transition-next="slide-left"
    class="bg-grey-1"
  >
    <q-carousel-slide class="row flex flex-center"  v-for="(slide,index) in slideImages" :name="index" v-bind:key="slide.id" >
      <q-img class="col-8  self-center" ratio="1" :src="slide.src" style=""></q-img>
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
              {id:'1',src:'https://4cs.gia.edu/wp-content/uploads/2017/05/Hero_CARAT-WEIGHT-6Greys_700x354.jpg'},
              {id:'2',src:'https://4cs.gia.edu/wp-content/uploads/2016/08/Hero_Color_990x500.jpg'},
              {id:'3',src:'https://4cs.gia.edu/wp-content/uploads/2016/08/Hero_Clarity_990x500.jpg'},
              {id:'4',src:'https://4cs.gia.edu/wp-content/uploads/2016/08/Hero_DIAMOND_CUT_990x500_EN.jpg'},
              {id:'5',src:'https://4cs.gia.edu/wp-content/uploads/2016/08/Hero_Carat-Weight_990x500.jpg'},
            ],
          }
      }

    }
</script>

<style scoped>

</style>

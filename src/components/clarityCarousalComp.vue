
<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      autoplay="6000"
      control-color="black"
      navigation-icon="radio_button_checked"
      navigation
      padding
      arrows
      class="text-black shadow-1 rounded-borders"
    >
      <q-carousel-slide v-for="clarity in clarities" :key="clarity.id" :name="clarity.id" class="column no-wrap ">
        <div class=" text-center row flex  ">
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <q-img class="q-mt-md self-center" ratio="1" :src="clarity.url" style="height: 200px; width: 200px"></q-img>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-black self-center">
            <h4>{{clarity.id}}</h4>
            <p class="text-h5">{{clarity.name}}</p>
            <p>{{clarity.comment}}</p>
          </div>

        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
    export default {
        name: "clarityCarousalComp",
      data () {
        return {

        }
      },
      props:{
          slide:'',
        clarities: ''
      }
    }
</script>
<style scoped>

</style>

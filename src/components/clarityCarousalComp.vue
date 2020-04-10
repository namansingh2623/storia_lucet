
<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      autoplay="1"
      control-color="black"
      navigation-icon="radio_button_checked"
      navigation
      padding
      arrows
      class="text-black shadow-1 rounded-borders"
    >
      <q-carousel-slide v-for="clarity in clarities" :key="clarity.id" :name="clarity.id" class="column no-wrap ">
        <div class=" text-center row flex  ">
          <div class="col-6">
            <q-img class="q-mt-md self-center" ratio="1" :src="clarity.url" style="height: 200px; width: 200px"></q-img>
          </div>
          <div class="col-6 text-black self-center">
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
          slide: 'FL',
          clarities:[
            {id:'FL',name:'Flawless',comment:'Well i am the best!! top of my class',url:'https://4cs.gia.edu/interactive-4cs/img/clarity/IF_1.jpg' },
            {id:'IF',name:'Internally Flawless',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/clarity/IF_1.jpg'},
            {id:'VVS1',name:'VERY, VERY SLIGHTLY INCLUDED',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/clarity/VVS1_1.jpg'},
            {id:'VVS2',name:'VERY, VERY SLIGHTLY INCLUDED',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/clarity/VVS2_1.jpg'},
            {id:'VS1',name:'VERY SLIGHTLY INCLUDED',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/clarity/VS_1.jpg'},
            {id:'VS2',name:'VERY SLIGHTLY INCLUDED',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/clarity/VS2_1.jpg'},
            {id:'SI1',name:'SLIGHTLY INCLUDED',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/clarity/SI1_1.jpg'},
            {id:'SI2',name:'SLIGHTLY INCLUDED',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/clarity/SI2_1.jpg'},
            {id:'I2',name:'INCLUDED',comment:'I might not have all the sparkle but i am affordable',url:'https://4cs.gia.edu/interactive-4cs/img/clarity/I1_1.jpg'},
          ]
        }
      }
    }
</script>
<style scoped>

</style>

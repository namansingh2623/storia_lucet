<template>
  <div class="">
    <q-carousel
      arrows
      animated
      v-model="slide"
      control-color="black"
      style="height: fit-content"
      autoplay="6000"


    >
      <q-carousel-slide class="row flex flex-center" v-for="cut in cuts" :key="cut.h3Header" :name="cut.h3Header      ">
        <q-img :src="cut.imgurl" class="col-xs-12 col-sm-12 col-md-6 col-lg-6" ratio="1" style="height:300px "/>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div class="row flex-center flex q-gutter-y-lg">
          <p class="text-h3 text-black self-center">{{cut.h3Header}}</p>
          <p class="text-h6 text-black self-center">{{cut.pTagText}}</p>
          </div>
          </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        slide: 'Excellent',
        cuts:[
          {
            imgurl:'https://4cs.gia.edu/interactive-4cs/img/cut/excellent/01.jpg',
            h3Header:'Excellent',
            pTagText:'The diamond, which has an even pattern of bright and dark areas,\n '+
              ' scores in the top category for all grade-setting determinants.',
          },
          {
            imgurl:'https://4cs.gia.edu/interactive-4cs/img/cut/vgood/01.jpg',
            h3Header:'Very Good',
            pTagText:'This diamond’s grade is determined by brightness, scintillation, and polish. \n'+
              ' Although no individual proportions would necessarily cause its brightness or scintillation \n '+
              ' to perform poorly, the combination of this particular set of proportions leads to increased \n '+
              ' darkness in the pavilion mains.',
          },
          {
            imgurl: 'https://4cs.gia.edu/interactive-4cs/img/cut/good/03.jpg',
            h3Header: 'Good',
            pTagText: 'This diamond’s grade is limited by its scintillation. The shallow crown angle and low crown height \n'+
              ' lead to a face-up appearance with a lack of contrast in its pattern and localized darkness (especially in the table area).'
          },{
            imgurl: 'https://4cs.gia.edu/interactive-4cs/img/cut/fair/01.jpg',
            h3Header: 'Fair',
            pTagText: 'This diamond’s grade is limited by its scintillation. The combination of a shallow crown angle and a somewhat \n '+
              ' shallow pavilion angle leads to a face-up appearance with a lack of contrast and general darkness.',
          },{
            imgurl: 'https://4cs.gia.edu/interactive-4cs/img/cut/poor/01.jpg',
            h3Header: 'Poor',
            pTagText: 'This diamond’s grade is limited by its weight ratio. Although most of the proportions for this diamond are fairly standard, \n'+
              ' the extremely thick girdle greatly increases the total depth. Therefore, this diamond’s diameter is much smaller than its carat weight \n '+
              'would indicate.'
          }
        ]
      }
    }
  }
</script>

<style lang="sass" scoped>
  .custom-caption
    text-align: center
    padding: 12px
    color: white
    background-color: rgba(0, 0, 0, .3)
</style>

<template>
<div class="row flex flex-center">
  <h3 class="col-12">Color</h3>
  <q-img class="col-xs-12 col-sm-12 col-md-4 col-lg-4 q-mx-lg" src="https://abbysparks.com/wp-content/uploads/2017/07/Diamon-color-chart-1.jpg"></q-img>
  <p class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-h6 self-center">{{colortext}}</p>
  <clarity-carousal-comp class="col-12" :slide="slide" :clarities="colors"></clarity-carousal-comp>

</div>
</template>

<script>
    import ClarityCarousalComp from "./clarityCarousalComp";
    export default {
        name: "ColorComp",
      components: {ClarityCarousalComp},
      data(){
          return{
            colortext:' Interestingly, the diamond color evaluation of most gem-quality diamonds is based on the' +
              ' absence of color. A chemically pure and structurally perfect diamond has no hue, like a drop' +
              ' of pure water, and consequently, a higher value. GIA’s D-to-Z diamond color-grading system ' +
              'measures the degree of colorlessness by comparing a stone under controlled lighting and precise ' +
              'viewing conditions to masterstones of established color value.\n' +
              '\n' +
              'Many of these diamond color distinctions are so subtle that they are invisible to the untrained eye;' +
              ' however, these distinctions make a very big difference in diamond quality and price.',
            slide:'D',
            colors:[
              {id:'D',name:'Colorless',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/color/d.png'},
              {id:'E',name:'Colorless',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/color/e.png'},
              {id:'F',name:'Colorless',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/color/f.png'},
              {id:'G',name:'Near Colorless',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/color/g.png'},
              {id:'H',name:'Near Colorless',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/color/h.png'},
              {id:'I',name:'Near Colorless',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/color/i.png'},
              {id:'J',name:'Near Colorless',comment:'',url:'https://4cs.gia.edu/interactive-4cs/img/color/j.png'},
            ]
          }
      }
    }
</script>

<style scoped>

</style>

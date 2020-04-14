<template>
    <div class="row text-black flex flex-center">
      <h3 class="col-12">Carat</h3>
      <q-img class="col-xs-12 col-sm-12 col-md-4 col-lg-4 " width="400px" src="https://m.media-amazon.com/images/S/aplus-media/vc/629e67ad-e6ca-44ea-a22f-f89318776103.jpg"></q-img>
      <div class="col-1"></div>
      <p class="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-h6 self-center">{{carattext}}</p>
    </div>
</template>

<script>
    export default {
        name: "caratComp",
      data(){
          return{
            carattext:'A metric “carat” is defined as 200 milligrams. Each carat is subdivided into 100 ‘points.’' +
              ' This allows very precise measurements to the hundredth decimal place. A jeweler may describe the ' +
              'weight of a diamond below one carat by its ‘points’ alone. For instance, the jeweler may refer to a' +
              ' diamond that weighs 0.25 carats as a ‘twenty-five pointer.’ Diamond weights greater than one carat are ' +
              'expressed in carats and decimals. A 1.08 carat stone would be described as ‘one point oh eight carats.’'
          }
      }
    }
</script>

<style scoped>

</style>

<template>
  <div class="row flex flex-center ">
    <h3 class="col-12 ">Shape (Cut)</h3>
    <q-img class="col-xs-12 col-sm-12 col-md-4 col-lg-4  " src="../assets/960x960-diamond-proportion-graphic.jpg" ></q-img>
    <div class="col-lg-1 col-md-1"></div>
    <p class="text-h6 col-xs-12 col-sm-12 col-md-6 col-lg-6 self-center">{{underStandingDimondtxt}}</p>
  </div>
</template>

<script>
    export default {
        name: "cutComp",
      data(){
          return{
            underStandingDimondtxt:'Diamonds are renowned for their ability to transmit light and sparkle so intensely. ' +
              'We often think of a diamond’s cut as shape \n'+
              ' (round, heart, oval, marquise, pear), but what diamond cut actually does mean how well a diamond’s facets ' +
              'interact with light. Precise artistry and \n '+
              'workmanship are required to fashion a stone so its proportions, symmetry and polish deliver the magnificent' +
              ' return of light only possible in a diamond.',

          }
      }
    }
</script>

<style scoped>

</style>

<template>
  <div class="row flex-center">
    <h3 class="col-12 ">Shape (Cut)</h3>
    <q-img class="col-xs-12 col-sm-12 col-md-6 col-lg-6" src="https://4cs.gia.edu/wp-content/uploads/2017/05/Hero_Cut_700x394.jpg"></q-img>
    <p class="text-h6 col-xs-12 col-sm-12 col-md-6 col-lg-6 self-center">{{underStandingDimondtxt}}</p>
  </div>
</template>

<script>
    export default {
        name: "cutComp",
      data(){
          return{
            underStandingDimondtxt:'Diamonds are renowned for their ability to transmit light and sparkle so intensely. We often think of a diamond’s cut as shape \n'+
              ' (round, heart, oval, marquise, pear), but what diamond cut actually does mean how well a diamond’s facets interact with light. Precise artistry and \n '+
              'workmanship are required to fashion a stone so its proportions, symmetry and polish deliver the magnificent return of light only possible in a diamond.',

          }
      }
    }
</script>

<style scoped>

</style>

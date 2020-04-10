<template>
  <div class="row q-ma-none">
    <h2 class="col-12">Overview</h2>
    <h5 class="col-12 ellipsis">Calculate The High Wholesale Value Before You Buy Or Sell A Diamond</h5>
    <p class="col-12 text-h6">{{overviewText}}</p>
  </div>
</template>

<script>
    export default {
        name: "overviewComp",
      data(){
          return{
            overviewText:'This calculator works as a guideline of value for most diamonds.  It is not an indication of our purchase or sale price.\n'+
              ' We are very competitive in our valuations, but many factors go into pricing specific diamonds. \n'+
              ' This original Diamond Price Calculator™️  has been relied upon by millions across the world since 2005. \n' +
              '\n' +
              'Sometimes you need a few tools to set your expectations before you set foot into a store. We invite you to use our Diamond Price Calculator, \n '+
              ' it' +
              '\'s an excellent tool to approximate the high wholesale price or value of a loose diamond in US dollars.',

          }
      }
    }
</script>

<style scoped>

</style>

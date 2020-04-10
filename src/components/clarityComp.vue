<template>
  <div class="row flex-center text-white ">
    <h3 class="col-12">Clarity</h3>
    <q-img class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-mx-lg" style="width: 400px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrGHqyX884bInz_7KGYWu0eCBKrZG62sdDcpO8Rrt6i-BfjBeZ&usqp=CAU"></q-img>
    <p class="col-xs-12 col-sm-12 col-md-6 col-lg-6  text-h6 self-center">{{clarityText}}</p>
<!--    <ul class="col-6">-->
<!--      <li class="text-black" v-for="li in clarity">{{li}}</li>-->

<!--    </ul>-->
  </div>
</template>

<script>
    export default {
        name: "clarityComp",
      data(){
          return{
            clarityText:'Diamond clarity refers to the absence of these inclusions and blemishes.' +
              ' Diamonds without these birthmarks are rare, and rarity affects a diamond’s value. Using' +
              ' the GIA International Diamond Grading System™, diamonds are assigned a clarity grade that' +
              ' ranges from flawless (FL) to diamonds with obvious inclusions (I3).\n' +
              'Every diamond is unique. None is absolutely perfect under 10× magnification, ' +
              'though some come close. Known as Flawless diamonds, these are exceptionally rare. Most jewelers' +
              ' have never even seen one.\n' +
              'The GIA Clarity Scale contains 11 grades, with most diamonds falling into the VS (very slightly included)' +
              ' or SI (slightly included) categories. \n',
            clarity:['Flawless (FL) - No inclusions or blemishes are visible to a skilled grader using 10× magnification',
              'Internally Flawless (IF) - No inclusions and only blemishes are visible to a skilled grader using 10× magnification',
              'Very, Very Slightly Included (VVS1 and VVS2) - Inclusions are difficult for a skilled grader to see under 10× magnification',
              'Very Slightly Included (VS1 and VS2) - Inclusions are minor and range from difficult to somewhat easy for a skilled grader to see under 10x magnification',
              'Slightly Included (SI1 and SI2) - Inclusions are noticeable to a skilled grader under 10x magnification',
              'Included (I1, I2, and I3) - Inclusions are obvious under 10× magnification and may affect transparency and brilliance'],
          }
      }
    }
</script>

<style scoped>

</style>

<template>
  <q-page style-fn="myTweak"  style="background: #24424D" >
    <div class="row q-gutter-y-lg">
      <div class="col-12">
        <top-carousal></top-carousal>
      </div>
      <q-card  bordered square class=" col-12 ">
        <q-card-section class="">
          <!--      <h3>Diamond Price Calculator ™</h3>-->
        </q-card-section>
        <q-card-section>
          <div class="bellowButtonClass col-12 ">
            <h3>Diamond Price Calculator ™</h3>
            <div class="row flex-center flex">
              <!-- left col for cut clarity carat-->
              <div class="col-6 ">
                <div class="row q-gutter-y-lg q-mx-lg">
                    <div class="col-8">
                      <q-input label="Carat" rounded class="" v-model="propertiesStore.carat" />
                    </div>
                    <q-select class="col-8"  filled v-model="propertiesStore.Clarity" :options="properties.Clarities" label="Clarity" />
                    <q-select class="col-8"  filled v-model="propertiesStore.cut" :options="properties.cuts" label="Cut" />
                </div>
              </div>
              <!-- right col for color the chexkbox-->
           <div class="col-6">
              <q-list >
                <q-item v-for="(property,index) in properties.colors">
                  <q-checkbox val="propertiesStore.color">{{property}}</q-checkbox>
                </q-item>
              </q-list>

           </div>
              <q-btn label="Submit" class="col-3 self-center q-my-lg"  dense size="lg"></q-btn>
            </div>
          </div>

        </q-card-section>

      </q-card>
      <q-card  bordered square class="col-12">
        <q-card-section>
            <div class="row q-ma-none">
              <h2 class="col-12">Overview</h2>
              <h5 class="col-12 ellipsis">Calculate The High Wholesale Value Before You Buy Or Sell A Diamond</h5>
              <p class="col-12 text-h6">{{overviewText}}</p>
            </div>
        </q-card-section>
      </q-card>
        <q-card>
          <q-card-section>
            <div class="row flex-center">
              <h3 class="col-12 ">Shape (Cut)</h3>
              <q-img class="col-xs-12 col-sm-12 col-md-6 col-lg-6" src="https://4cs.gia.edu/wp-content/uploads/2017/05/Hero_Cut_700x394.jpg"></q-img>
              <p class="text-h6 col-xs-12 col-sm-12 col-md-6 col-lg-6 self-center">{{underStandingDimondtxt}}</p>
            </div>
          </q-card-section>
          <q-card-section>
          <my_carousal></my_carousal>
          </q-card-section>
        </q-card>

      <q-card bordered square class="Clarity col-12">
          <q-card-section>
            <div class="row flex-center flex">
            <h3>Clarity</h3>
            <p class="electron-hide">{{clarityText}}</p>
            </div>
          </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import my_carousal from "../components/mycarousal";
import TopCarousal from "../components/topCarousal";
  export default {
    components:{TopCarousal, my_carousal},
    data(){
      return{

        properties:{
          carat:'',
          colors:['D','E','F','G','H','I','J'],
          Clarities:['SI2', 'SI1', 'VS1', 'VS2', 'VVS2', 'VVS1', 'I1', 'IF'],
          cuts:['Ideal', 'Premium', 'Good', 'Very Good', 'Fair']
        },
        propertiesStore:{
          carat:'',
          color:'',
          Clarity:'',
          cut:'',
        },
        overviewText:'This calculator works as a guideline of value for most diamonds.  It is not an indication of our purchase or sale price.\n'+
          ' We are very competitive in our valuations, but many factors go into pricing specific diamonds. \n'+
          ' This original Diamond Price Calculator™️  has been relied upon by millions across the world since 2005. \n' +
          '\n' +
          'Sometimes you need a few tools to set your expectations before you set foot into a store. We invite you to use our Diamond Price Calculator, \n '+
          ' it' +
          '\'s an excellent tool to approximate the high wholesale price or value of a loose diamond in US dollars.',
        underStandingDimondtxt:'Diamonds are renowned for their ability to transmit light and sparkle so intensely. We often think of a diamond’s cut as shape \n'+
          ' (round, heart, oval, marquise, pear), but what diamond cut actually does mean how well a diamond’s facets interact with light. Precise artistry and \n '+
          'workmanship are required to fashion a stone so its proportions, symmetry and polish deliver the magnificent return of light only possible in a diamond.',



        clarityText:'Because diamonds formed deep within the earth, under extreme heat and pressure, they often contain unique birthmarks, either internal (inclusions) or external (blemishes).\n' +
          '\n' +
          'Diamond clarity refers to the absence of these inclusions and blemishes. Diamonds without these birthmarks are rare, and rarity affects a diamond’s value. Using the GIA International Diamond Grading System™, diamonds are assigned a clarity grade that ranges from flawless (FL) to diamonds with obvious inclusions (I3).\n' +
          '\n' +
          'Every diamond is unique. None is absolutely perfect under 10× magnification, though some come close. Known as Flawless diamonds, these are exceptionally rare. Most jewelers have never even seen one.\n' +
          '\n' +
          'The GIA Clarity Scale contains 11 grades, with most diamonds falling into the VS (very slightly included) or SI (slightly included) categories. In determining a clarity grade, the GIA system considers the size, nature, position, color or relief, and quantity of clarity characteristics visible under 10× magnification.\n' +
          '\n' +
          'Flawless (FL) - No inclusions or blemishes are visible to a skilled grader using 10× magnification\n' +
          'Internally Flawless (IF) - No inclusions and only blemishes are visible to a skilled grader using 10× magnification\n' +
          'Very, Very Slightly Included (VVS1 and VVS2) - Inclusions are difficult for a skilled grader to see under 10× magnification\n' +
          'Very Slightly Included (VS1 and VS2) - Inclusions are minor and range from difficult to somewhat easy for a skilled grader to see under 10x magnification\n' +
          'Slightly Included (SI1 and SI2) - Inclusions are noticeable to a skilled grader under 10x magnification\n' +
          'Included (I1, I2, and I3) - Inclusions are obvious under 10× magnification and may affect transparency and brilliance',

      }
    },
    methods:{
      myTweak(offset) {
        return {minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',}
      },
    }
  }
</script>

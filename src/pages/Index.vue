<template>
  <!--24424D-->
  <q-page style-fn="myTweak"  style="background: linear-gradient(to bottom,#076585,#fff)" >
    <div class="row q-gutter-y-lg">
      <div class="col-12">
        <top-carousal></top-carousal>
      </div>
      <q-card  bordered square class=" col-12 ">
        <q-card-section class="">
        </q-card-section>
        <q-card-section>
          <div class="bellowButtonClass col-12 ">
            <h3>Diamond Price Calculator™</h3>
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
             <span class="text-h6">Color</span>
              <q-list>
                <q-item v-for="(property,index) in properties.colors">
                  <q-checkbox val="propertiesStore.color">{{property}}</q-checkbox>
                </q-item>
              </q-list>

           </div>
              <q-btn style="background: #24424D" dense label="Submit" class="col-3 self-center q-my-lg text-white" dense size="lg"></q-btn>
            </div>
          </div>

        </q-card-section>

      </q-card>
      <q-card  bordered square class="OverView  col-12">
        <q-card-section>
            <overview-comp></overview-comp>
        </q-card-section>
      </q-card>
      <!--Cut card-->
        <q-card class="cutCard">
          <q-card-section>
            <cut-comp></cut-comp>
          </q-card-section>
          <q-card-section>
          <my_carousal></my_carousal>
          </q-card-section>
        </q-card>

      <q-card bordered square class="ClarityCard col-12">
          <q-card-section>
            <clarity-comp></clarity-comp>
          </q-card-section>
      </q-card>
      <q-card class="ColorCard col-12">
        <q-card-section>
          <color-comp></color-comp>
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section>
          <carat-comp></carat-comp>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import my_carousal from "../components/mycarousal";
import TopCarousal from "../components/topCarousal";
import ClarityComp from "../components/clarityComp";
import CutComp from "../components/cutComp";
import OverviewComp from "../components/overviewComp";
import ClarityCarousalComp from "../components/clarityCarousalComp";
import ColorComp from "../components/ColorComp";
import CaratComp from "../components/caratComp";
  export default {
    components:{CaratComp, ColorComp, ClarityCarousalComp, OverviewComp, CutComp, ClarityComp, TopCarousal, my_carousal},
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


      }
    },
    methods:{
      myTweak(offset) {
        return {minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',}
      },
    }
  }
</script>

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
                      <q-input label="Carat" rounded type="Number" class="" v-model="selectedCarat" />
                    </div>
                    <q-select class="col-8"  filled v-model="selectedClarity" :options="Clarities" label="Clarity" />
                    <q-select class="col-8"  filled v-model="selectedCut" :options="cuts" label="Cut" />
                </div>
              </div>
              <!-- right col for color the chexkbox-->
           <div class="col-6">
<!--             <span class="text-h6">Color</span>-->
<!--              <q-list>-->
<!--                <q-item v-for="(property,index) in properties.colors">-->
<!--                  <q-checkbox val="propertiesStore.color">{{property}}</q-checkbox>-->
<!--                </q-item>-->
<!--              </q-list>-->
             <div class="row q-gutter-y-lg q-mx-lg">
               <div class="col-8">
             <q-select class="col-8"  filled v-model="selectedColor" :options="colors" label="Color" />
               </div>
             </div>

           </div>

                <h4 class="col-12 text-black">Price = {{price}} $8075 /-</h4>

              <q-btn style="background: #24424D" @click="OnSubmit" dense label="Submit" class="col-3 self-center q-my-lg text-white" dense size="lg"></q-btn>
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
import DimondRepo from "../Repository/repository";
import axios from "axios";
  export default {
    components:{CaratComp, ColorComp, ClarityCarousalComp, OverviewComp, CutComp, ClarityComp, TopCarousal, my_carousal},
    data(){
      return{

          colors:['D','E','F','G','H','I','J'],
          Clarities:['IF','VVS1','VVS2','VS1','VS2','SI1','SI2'],
          cuts:['Ideal', 'Premium','Very Good','Good', 'Fair'],
          selectedCarat:0,
          selectedColor:'',
          selectedCut:'',
        selectedPrice:'',
        selectedClarity:'',
        price:'',
        cut:{
            'Ideal':'Z',
            'Premium':'C',
            'Very Good':'O',
            'Good':'X',
            'Fair':'R',
        }
      }


    },
    methods:{
      myTweak(offset) {
        return {minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',}
      },
      OnSubmit(){
        let vm=this;
        const valueClarity = vm.Clarities.indexOf(vm.selectedClarity);
        //check kar ye
        console.log("selected value is ",valueClarity);
        const valueCut = vm.cut[vm.selectedCut];
        console.log('selected cut is ',valueCut);

        const car=parseInt(vm.selectedCarat)

        console.log("selected values cut=",valueCut+" |Carat="+car+" | color= "+vm.selectedColor+" | Clarity="+valueClarity)
        const data={
          shape: valueCut,
          carat: car,
          color: vm.selectedColor,
          clarity: valueClarity
        }
        console.log("selected values in data cut=",data.shape+" |Carat="+data.carat+" | color= "+data.color+" | Clarity="+data.clarity)
        // axios.post('http://localhost:3000/get-prices',data).then(
        //   res=>console.log('',res)
        // ).catch(err=>console.log('errors is =',err))
        new Promise((resolve,reject)=>{
          axios
            .post('http://localhost:3000/get-prices',data)
            .then(res=>{
              resolve(res);
              console.log("succ")
            })
            .catch(err=>{reject(err);
                console.log("error")
            }

            )
        })

      }
    },
  }
</script>

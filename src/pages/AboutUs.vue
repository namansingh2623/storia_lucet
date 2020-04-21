<template>
  <q-page>
    <div class="row flex flex-center">
      <h2 class="col-12 self-center">Made By :</h2>
      <h6 class="col-3 self-center">{{details.firstname}}  {{details.lastname}}</h6>
      <h6 class="col-3 self-center">{{details.email}}</h6>
    </div>
  </q-page>
</template>

<script>
  import ProfileRepo from "src/Repository/ProfileRepo";
    export default {
        name: "AboutUs",
      data(){
          return{
            details:[]
          }
      },
      created() {
        ProfileRepo.then((res)=>{
          this.details=res;
        })
        console.log('from det'+this.details)
      }
    }
</script>

<style scoped>

</style>

<template>
  <q-page>
    <div class="row">
      <h3 class="col-6">{{details.firstname}}</h3>
      <h3 class="col-6">{{details.lastname}}</h3>
      <h3 class="col-6">{{details.username}}</h3>
      <h3 class="col-6">{{details.email}}</h3>
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

<template>
  <q-layout view="hHh lpR fFf">
    #870000
    <q-header reveal  class=" text-white row flex" style="background: #076585">
        <h4 class="text-weight-bold q-mx-lg col-2  " @click="goto">
          {{title}}
        </h4>
      <q-list class="col-10" >
        <q-item class="absolute-right">
          <q-btn unelevated label="About Us" to="/aboutus"></q-btn>
        </q-item>

      </q-list>

    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        title:'Storia Lucet'
      }
    },
    methods:{
      goto(){
        this.$router.push('');
      }
    }
  }
</script>

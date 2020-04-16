<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal  class=" text-white row flex" style="background: #24424D">
        <h4  class="text-weight-bold q-mx-lg col-2  ">
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
    }
  }
</script>

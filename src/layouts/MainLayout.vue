<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal  class=" text-white" style="background: #24424D">
        <h4 class="text-weight-bold q-mx-lg">
          {{title}}
        </h4>

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

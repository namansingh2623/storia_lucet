<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class=" text-white" style="background: #24424D">
      <q-toolbar>
        <q-toolbar-title>
          {{title}}
        </q-toolbar-title>
      </q-toolbar>
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

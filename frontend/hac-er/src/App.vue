<template>
  <v-app>
    <side-bar :clipped="clipped" :drawer="drawer" :miniVariant="miniVariant"/>
    <v-toolbar
      app
      :clipped-left="clipped"
      color="primary"
    >
      <v-toolbar-side-icon class="white--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" class="white--text"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'HAC-er'
    }
  },
  name: 'App',
  components: {
    SideBar
  }
}
</script>

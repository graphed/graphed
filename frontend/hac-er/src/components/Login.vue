<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout align-center justify-center>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login using HAC</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field id="username" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="login" color="primary">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import axios from 'axios'
let API_URL = 'https://fat-ladybug-64.localtunnel.me'

export default {
  methods: {
    login () {
      let storage = window.localStorage

      storage.setItem('url', API_URL)

      let username = document.getElementById('username').value.trim()
      let password = document.getElementById('password').value.trim()

      let formData = new FormData()
      formData.set('username', username)
      formData.set('password', password)

      axios({
        method: 'post',
        url: API_URL + '/api/grades',
        data: formData
      }).then(response => {
        if (response.data.error === true) {
          alert('your login is wrong')
        } else {
          console.log(response)
          this.$store.commit('setClasses', response.data.classes)
          this.$store.commit('setAuth', response.data.auth_cookie)
          this.$store.commit('setSession', response.data.session_id)

          storage.setItem('user', username)
          storage.setItem('password', password)

          this.$router.push({path: 'home'})
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>


<style scoped>
</style>

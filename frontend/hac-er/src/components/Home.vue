<template>
  <div class="table">
  <v-data-table
      :headers="headers"
      :items="this.$store.state.classes"
      class="elevation-1"
      hide-actions
    >
      <template slot="items" slot-scope="props">
        <router-link :to="'class/' + props.index">
          <td>{{ props.item.name }}</td>
        </router-link>
        <td class="text-xs-right">{{ props.item.average }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      headers: [
        {
          text: 'Class Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Average',
          align: 'right',
          sortable: true,
          value: 'average'
        }
      ]
    }
  },
  mounted () {
    let storage = window.localStorage

    if (this.$store.state.classes.length === 0) {
      let username = storage.getItem('user')
      let password = storage.getItem('password')

      let formData = new FormData()
      formData.set('username', username)
      formData.set('password', password)

      axios({
        method: 'post',
        url: storage.getItem('url') + '/api/grades',
        data: formData
      }).then(response => {
        console.log(response)
        this.$store.commit('setClasses', response.data.classes)
        this.$store.commit('setAuth', response.data.auth_cookie)
        this.$store.commit('setSession', response.data.session_id)
      }).catch(error => {
        console.log(error)
        this.$router.push({ path: 'login' })
      })
    }
  }
}
</script>

<style scoped>
.table {
  max-width: 800px;
  margin: auto;
}
</style>
